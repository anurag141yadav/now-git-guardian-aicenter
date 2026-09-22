function alertdataTableController($scope, $rootScope, $location, $window, spUtil, amb, $http, spAriaUtil, $timeout, spNavStateManager, i18n, spModal) {
	var c = this;
	c.groupQuery = "";
	c.mergeVisits = {};
	c.mergeVisits.listItemSelected = 0;
	c.mergeVisits.visitIds = [];
	c.showSearchbox = $scope.data.showSearchbox;
	c.defaultFilter = $scope.data.filter;
	$scope.accessibilityModeEnabled = spAriaUtil.isAccessibilityEnabled();
	$scope.exportTypes = [{
		label: 'PDF',
		value: 'PDF'
	}, {
		label: 'Excel',
		value: 'EXCEL'
	}, {
		label: 'CSV',
		value: 'CSV'
	}
											 ];
	var keys = ['table', 'filter', 'p', 'o', 'd'];
	$scope.pageContext = {};
	var i18nMsgs = {
		filteredResults: i18n.getMessage('Filtered {0} list showing {1} to {2} of {3} records'),
		unFilteredResults: i18n.getMessage('Unfiltered {0} list showing {1} to {2} of {3} records'),
		filteredNoResults: i18n.getMessage('Filtered {0} list showing 0 records'),
		unFilteredNoResults: i18n.getMessage('Unfiltered {0} list showing 0 records')
	};
	var eventNames = {
		click: 'data_table.click',
		setFilter: 'data_table.setFilter',
		setKeywords: 'data_table.setKeywords'
	};
	$scope.toggleAllCheckboxes = function () {
		var selectAll = document.getElementById('selectAll');
		$scope.data.list.forEach(function (item) {
			item.selected = selectAll.checked;
		});
	};

	c.toggleMergeButton = function (item) {
		if (item.selected || item.selected == "true") {
			if (c.mergeVisits.visitIds.indexOf(item.sys_id) == -1) {
				c.mergeVisits.listItemSelected+=1;
				c.mergeVisits.visitIds.push(item.sys_id);
			}
		}else{
			var visitIndex = c.mergeVisits.visitIds.indexOf(item.sys_id);
			if (visitIndex > -1) {
				c.mergeVisits.visitIds.splice(visitIndex, 1);
			}
			c.mergeVisits.listItemSelected -=1;
		}
	}
	c.getValueByPath = function (path) {
		try {
			return path.split('.').reduce((obj, part) => obj && obj[part], c);
		} catch (e) {
			return undefined;
		}
	};
	$scope.displayCheck = function (action, item) {
		if (action.condition == null || action.condition == undefined) {
			return true;
		}
		if (action.condition != null) {
			var conditionType = action.condition.type;
			if (conditionType == "" || conditionType == undefined || conditionType == 'data' || conditionType == 'data&role') {
				var propName = action.condition.propertyName;
				if (propName == "" || propName == undefined) {
					return true;
				} else {
					if (item[propName] != undefined) {
						var ifCondition = action.condition.condition;
						var condtionValue = action.condition.value;
						if (ifCondition == "=") {
							if (item[propName].value.indexOf(condtionValue) != -1) {
								if (conditionType == 'data&role') {
									return $scope.validateRoles(action.condition.role);
								}
								return true;
							} else {
								return false;
							}
						}
						if (ifCondition == "!=") {
							if (item[propName].value.indexOf(condtionValue) != -1) {
								return false;
							} else {
								if (conditionType == 'data&role') {
									return $scope.validateRoles(action.condition.role);
								}
								return true;
							}
						}
						if (ifCondition == "in") {
							var conditions_array = condtionValue.split(',');
							for (var i in conditions_array) {
								var condVal = conditions_array[i];
								if (item[propName].value.indexOf(condVal) != -1) {
									if (conditionType == 'data&role') {
										return $scope.validateRoles(action.condition.role);
									}
									return true;
								}
							}
							return false;
						}
					}
				}
			}
			if (conditionType == 'role') {
				return $scope.validateRoles(action.condition.role);
			}
			if (conditionType == 'path&role') {
				var roleEval = $scope.validateRoles(action.condition.role);
				var pathValue = c.getValueByPath(action.condition.propertyName);
				if (pathValue) {
					if (action.condition.condition == "=") {
						return roleEval && pathValue.toString() == action.condition.value;
					} else if (action.condition.condition == ">") {
						return roleEval && pathValue.toString() > action.condition.value.toString();
					}
				} else {
					return false;
				}
			}
			if (conditionType == "multiple") {
				var condtionsListArray = action.condition.conditions;
				var isEvaluatedTrue = false;
				for (var cli in condtionsListArray) {
					var condObj = condtionsListArray[cli];
					var conditionTypeNew = condObj.condition;
					var condtionValueNew = condObj.value;
					var propNameNew = condObj.propertyName;
					if (conditionTypeNew == "in") {
						var conditions_array_new = condtionValueNew.split(',');
						for (var ilg in conditions_array_new) {
							var condValNew = conditions_array_new[ilg];
							if (item[propNameNew].value.indexOf(condValNew) != -1) {
								isEvaluatedTrue = true;
								if (conditionTypeNew == 'data&role') {
									isEvaluatedTrue = $scope.validateRoles(condObj.role);
								}
							}
						}
					}
					if (conditionTypeNew == "=") {
						if (item[propNameNew].value.indexOf(condtionValueNew) != -1) {
							isEvaluatedTrue = true;
							if (conditionTypeNew == 'data&role') {
								isEvaluatedTrue = $scope.validateRoles(condObj.role);
							}
						} else {
							isEvaluatedTrue = false;
						}
					}
					if (!isEvaluatedTrue) {
						return false;
					}
					if (isEvaluatedTrue) {
						continue;
					}
				}
				return isEvaluatedTrue;
			}
		}
		return true;
	};

	$scope.validateRoles = function (rolesValue) {
		if (rolesValue == undefined || rolesValue == "") {
			return true;
		}
		var roleFoundInList = false;
		var roleCondtionValue = rolesValue;
		var roles_array = roleCondtionValue.split(',');
		for (var idrole in roles_array) {
			var roleToFind = roles_array[idrole];
			if (c.data.userRoles != undefined) {
				roleFoundInList = c.data.userRoles.includes(roleToFind);
				if (roleFoundInList == true) {
					return roleFoundInList;
				}
			}
		}
		return roleFoundInList;
	};
	$scope.getClass = function (item, field) {
		if ($scope.highlightColumnList.includes(field)) {
			var aliasColumn = $scope.highlightColumnAlias[field];
			if (aliasColumn != undefined && aliasColumn != "" && item[aliasColumn] != undefined) {
				return $scope.highlightColumns[field + "###" + aliasColumn + "###" + item[aliasColumn].value];
			} else {
				return $scope.highlightColumns[field + "###" + item[field].value];
			}
		}
	};
	$scope.getRowClass = function (item) {
		var rowClass = "";
		for (var ir = 0; ir < $scope.highlightRowList.length; ir++) {
			var fieldtoCheck = $scope.highlightRowList[ir];
			var rowColValue = item[fieldtoCheck];
			if (rowColValue != undefined) {
				var keyToCheck = fieldtoCheck + "###" + rowColValue.value;
				rowClass = $scope.highlightRows[keyToCheck];
				break;
			}
		}
		return rowClass;
	};
	$scope.getHeaderStyle = function (field) {
		var styleObject = {};
		var styleInput = "";
		var headerLabel = $scope.data.column_labels[field];
		for (var hs = 0; hs < $scope.headerStyle.length; hs++) {
			var headertoCheck = $scope.headerStyle[hs];
			if (headertoCheck.title == headerLabel) {
				styleInput = headertoCheck.style;
				break;
			}
		}
		if (styleInput != "" && styleInput != undefined) {
			var styleArray = styleInput.split(";").filter(function (item) {
				return item.trim() !== "";
			});
			styleArray.forEach(function (style) {
				var keyValue = style.split(":");
				var key = keyValue[0] ? keyValue[0].trim() : null;
				var value = keyValue[1] ? keyValue[1].trim() : null;
				if (key && value) {
					styleObject[key] = value;
				}
			});
		}
		return styleObject;
	};

	$scope.performAction = function (item, action) {
		if (action.action == null || action.action == undefined) {
			return;
		}
		if (action.action != null) {
			var action_type = action.action.type;
			if (action_type == "" || action_type == undefined) {
				return;
			} else {
				var action_value = action.action.value;
				if (action_type == 'form') {
					if (action_value == 'edit') {
						$scope.go(item.targetTable, item);
					}
				} else if (action_type == 'update') {
					var confirm_message = action.action.confirmMessage;
					spModal.open({
						title: action_value,
						message: confirm_message,
						buttons: [{
							label: '✔ OK',
							primary: true
						}, {
							label: '✘ Cancel',
							cancel: true,
							focus: true
						}
										 ]
					}).then(function (response) {
						if (response) {
							var requestData = {
								action: 'updateDataInTable',
								recordSysId: item.sys_id,
								tableName: item.targetTable,
								propertyNameToUpdate: action.action.propertyName,
								refcolumnTableName: action.action.refColTableName,
								propertyvalueToUpdate: action.action.propertyValue,
								propertyDataType: action.action.datatype
							};
							c.server.get(requestData).then(function (updateResponse) {
								if (updateResponse.data.response && updateResponse.data.response.success) {
									spUtil.addInfoMessage("Record updated successfully.");
									$scope.refreshGrid();
									$rootScope.$emit('visitor-score-refresh', "YES");
								} else {
									var errorMessage = updateResponse.data.response ? updateResponse.data.response.message : 'Unknown error';
									spUtil.addErrorMessage("Error: " + errorMessage);
								}
							});
						} else {
							spUtil.addErrorMessage("Action canceled");
						}
					});
				} else if (action_type == 'catalog') {
					var updatedUrl = replacePlaceholders(action.action.value, item);
					$location.search(updatedUrl);
				} else if (action_type == 'widget') {
					var widget_title = action.action.confirmMessage;
					var widgetInput = {};
					if (item != undefined && item.sys_id != undefined) {
						widgetInput.sys_id = item.sys_id;
					}
					if (action.action.propertyName != undefined && action.action.propertyName != "" &&
							action.action.propertyValue != undefined && action.action.propertyValue != "") {
						if (action.action.propertyName.includes(',')) {
							var propertyNames_array = action.action.propertyName.split(',');
							var propertyValues_array = action.action.propertyValue.split(',');
							for (var ivq = 0; ivq < propertyNames_array.length; ivq++) {
								var widgetInputPropertyName = propertyNames_array[ivq];
								var widgetInputPropertyValue = propertyValues_array[ivq];
								if (widgetInputPropertyValue.includes('$')) {
									var widgetPropertyFromItem = widgetInputPropertyValue.replace(/\$/g, '');
									var widgetInputValueFromItem = getDataFromItem(item, widgetPropertyFromItem);
									widgetInput[widgetInputPropertyName] = widgetInputValueFromItem;
								} else {
									widgetInput[widgetInputPropertyName] = widgetInputPropertyValue;
								}
							}
						} else {
							if (action.action.propertyValue.includes('$')) {
								var propertyFromItem = action.action.propertyValue.replace(/\$/g, '');
								var valueFromItem = getDataFromItem(item, propertyFromItem);
								if (valueFromItem) {
									widgetInput[action.action.propertyName] = valueFromItem;
								} else {
									try {
										var widgetInputValueFromVariable = c.getValueByPath(propertyFromItem);
										widgetInput[action.action.propertyName] = widgetInputValueFromVariable;
									} catch (e) {
										return;
									}
								}
							} else {
								widgetInput[action.action.propertyName] = action.action.propertyValue;
							}
						}
					}
					if (action_value == "alert-merge-visits-widget") {
						c.server.get({
							action: "checkMergeVisitData",
							visits: widgetInput.mergeVisitsMetdata.visitIds,
						}).then(function (resp) {
							if (resp.data.response.allAllowed == true || resp.data.response.allAllowed == "true") {
								spModal.open({
								title: widget_title,
								widget: action_value,
								widgetInput: widgetInput,
								size: 'lg',
								buttons: [{
									label: '✘ Close',
									cancel: true,
									focus: true
								}]
								}).then(function (response) {
									$scope.refreshGrid();
									c.mergeVisits = {};
									c.mergeVisits.listItemSelected = 0;
									c.mergeVisits.visitIds = [];
								});
							} else {
								spUtil.addErrorMessage(resp.data.response.message);
							}
						});
						return;
					}
					spModal.open({
						title: widget_title,
						widget: action_value,
						widgetInput: widgetInput,
						size: 'lg',
						buttons: [{
							label: '✘ Close',
							cancel: true,
							focus: true
						}
										 ]
					}).then(function (response) {
						$scope.refreshGrid();
					});
				}
			}
		}
	};

	function replacePlaceholders(template, values) {
		var result = template;
		while (result.indexOf('##') !== -1) {
			var start = result.indexOf('##');
			var end = result.indexOf('##', start + 2);
			if (end === -1) {
				break;
			}
			var placeholder = result.substring(start + 2, end);
			var value = getDataFromItem(values, placeholder);
			result =
				result.substring(0, start) +
				(value !== undefined ? value : '##' + placeholder + '##') +
				result.substring(end + 2);
		}
		return result;
	}

	function getDataFromItem(object, propertyPath) {
		return propertyPath.split('.').reduce(function (obj, key) {
			return obj && obj[key];
		}, object);
	}

	$scope.refreshGrid = function () {
		var filterBackup = $scope.data.filter;
		$scope.data.filter = "";
		$scope.setSearch();
		$scope.data.filter = filterBackup;
		$scope.setSearch();
	};
	$scope.go = function (table, item) {
		if ($window.getSelection().toString().length > 0)
			return;
		spNavStateManager.onRecordChange(table).then(function () {
			var parms = {};
			parms.table = table;
			parms.sys_id = item.sys_id;
			parms.record = item;
			$scope.ignoreLocationChange = true;
			for (var x in c.data.list) {
				c.data.list[x].selected = false;
			}
			item.selected = true;
			$scope.$emit(eventNames.click, parms);
		}, function () {
			// do nothing in case of closing the modal by clicking on x
		});
	};
	$scope.$on(eventNames.click, function (e, input) {
		var parms = {
			id: 'form',
			table: $scope.data.table,
			view: $scope.data.view,
			sys_id: input.sys_id
		};
		$location.search(parms);
	});
	$rootScope.$on('visitor-location-data', function (event, data) {
		$scope.pageContext.locationId = data;
		$scope.server.get({
			location_id: data,
			action: "getAllLocations"
		}).then(function (response) {
			$scope.global_location_filter = "";
			$scope.global_location_filter = response.data.alllocations;
			$scope.pageContext.locations = response.data.alllocations;
			$scope.prepareExternalFilterQueryAndSearch();
		});
	});
	$rootScope.$on('visit-date-filter', function (event, data) {
		$scope.pageContext.date = data;
		$scope.global_date_filter = data;
		$scope.prepareExternalFilterQueryAndSearch();
	});
	$scope.prepareExternalFilterQueryAndSearch = function () {
		if ($scope.options.use_external_filters == 'true') {
			if ($scope.global_date_filter != null && $scope.global_date_filter != undefined && $scope.global_date_filter != "") {
				var dateRegex = /start_dateON\d{4}-\d{2}-\d{2}@javascript:gs\.dateGenerate\('\d{4}-\d{2}-\d{2}','start'\)@javascript:gs\.dateGenerate\('\d{4}-\d{2}-\d{2}','end'\)/;
				if (dateRegex.test($scope.data.filter)) {
					$scope.data.filter = $scope.data.filter.replace(dateRegex, "start_dateON" + $scope.global_date_filter + "@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','start')@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','end')");
				} else {
					if ($scope.data.filter != undefined && $scope.data.filter.length > 1) {
						$scope.data.filter += '^';
					} else {
						$scope.data.filter = "";
					}
					var newDateQueryToAppend = "start_dateON" + $scope.global_date_filter + "@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','start')@javascript:gs.dateGenerate('" + $scope.global_date_filter + "','end')";
					$scope.data.filter += newDateQueryToAppend;
				}
			}
			if ($scope.global_location_filter != null && $scope.global_location_filter != undefined && $scope.global_location_filter != "") {
				var query = $scope.data.filter;
				var newLocationIds = $scope.global_location_filter;
				query = query.replace(/locationIN[^\\^]*/, "");
				query = query.replace(/(\^)+$/, '').replace(/^\^+/, '');
				query = query.replace(/\^{2,}/g, '^');
				query += (query ? "^" : "") + "locationIN" + newLocationIds;
				$scope.data.filter = query;
			}
			$scope.setSearch();
		}
	};
	$scope.checkAndSetTinyUrl = function () {
		var url = $scope.data.table + '_list.do?' + 'sysparm_query=' + $scope.data.exportQueryEncoded + '&sysparm_view=' + $scope.data.view + '&sysparm_fields=' + $scope.data.fields;
		$scope.tinyUrlEnabled = c.data.useTinyUrl && url.length >= c.data.tinyUrlMinLength;
		if ($scope.tinyUrlEnabled)
			$scope.getTinyUrl(url);
	};
	$scope.getTinyUrl = function (url) {
		$http.post('/api/now/tinyurl', {
			url: url
		}).then(function (response) {
			$scope.tinyUrl = new URL($window.location.origin + '/' + response.data.result).searchParams.get('sysparm_tiny');
		});
	};
	$scope.newRecord = function () {
		if ($scope.options.new_record_url != null && $scope.options.new_record_url != undefined && $scope.options.new_record_url != "") {
			$location.search($scope.options.new_record_url);
		} else {
			var parms = {
				id: 'form',
				table: $scope.data.table,
				view: $scope.data.view,
				sys_id: '-1'
			};
			if ($scope.data.exportQuery != '')
				parms.query = $scope.data.exportQuery;
			$location.search(parms);
		}
	};

	function recoverStateFromUrl() {
		$scope.data.fields = [];
		var s = $location.search();
		for (var x in keys) {
			if (s[keys[x]]) {
				$scope.data[keys[x]] = s[keys[x]];
			}
		}
		$scope.server.update().then(function (data) {
			if (s.sys_id) {
				for (var x in data.list) {
					if (data.list[x].sys_id == s.sys_id) {
						$scope.go(s.table, data.list[x]);
					}
				}
			}
		});
	}
	if ($scope.options.fromUrl) {
		var origSearch = $location.search();
		$scope.$on('$locationChangeSuccess', function (e) {
			var s = $location.search();
			if (origSearch.id !== s.id)
				return;
			if ($scope.ignoreLocationChange) {
				$scope.ignoreLocationChange = false;
				return;
			}
			recoverStateFromUrl();
		});
	}
	$scope.getNumber = function (num) {
		return new Array(num);
	};
	$scope.mathMin = function (v1, v2) {
		return Math.min(v1, v2);
	};

	function getData(updateUrl) {
		var f = $scope.data;
		spUtil.update($scope).then(function (data) {
			f.view = data.view;
			if ($scope.options.fromUrl && updateUrl)
				setPermalink(f.table, f.filter, f.o, f.d, f.p);
			if ($scope.options.show_breadcrumbs && data.filterBreadcrumbs)
				$scope.$broadcast('widget-filter-breadcrumbs.setBreadcrumbs', data.filterBreadcrumbs.data, data.filter);
			invokeResultsLiveMessage();
			initRecordWatcher(f.table, f.filter);
			$scope.checkAndSetTinyUrl();

			$scope.$applyAsync();
		});
	}

	function invokeResultsLiveMessage() {
		var data = $scope.data;
		var totalRowCount = data.row_count;
		var startIndex = data.window_start + 1;
		var endIndex = Math.min(data.window_end, totalRowCount);
		if (totalRowCount > 0)
			spAriaUtil.sendLiveMessage((data.filter ? i18nMsgs.filteredResults : i18nMsgs.unFilteredResults).withValues([data.table_plural, startIndex, endIndex, totalRowCount]));
		else
			spAriaUtil.sendLiveMessage((data.filter ? i18nMsgs.filteredNoResults : i18nMsgs.unFilteredNoResults).withValues([data.table_plural]));
	}

	function setPermalink(table, filter, orderBy, orderDirection, page) {
		$scope.ignoreLocationChange = true;
		var search = $location.search();
		angular.extend(search, {
			spa: 1,
			table: table,
			filter: filter,
			p: page,
			o: orderBy,
			d: orderDirection
		});
		$location.search(search);
	}
	var watcher;

	function initRecordWatcher(table, filter) {
		if (watcher)
			watcher.unsubscribe();
		if (table && filter) {
			var watcherChannel = amb.getChannelRW(table, filter);
			amb.connect();
			watcher = watcherChannel.subscribe(function (message) {
				if (!message.data)
					return;
				switch (message.data.action) {
					case "change":
						updateRowFromRW(message);
						break;
					case "exit":
						break;
					case "enter":
						break;
					default:
						spUtil.update($scope);
				}
			});
		}
	}

	function updateRowFromRW(message) {
		if (message.data && message.data.sys_id && $scope.data.list) {
			var row,
					field;
			for (var i = 0; i < $scope.data.list.length; i++) {
				row = $scope.data.list[i];
				if (row.sys_id == message.data.sys_id) {
					var fields = Object.getOwnPropertyNames(message.data.record);
					for (var f in fields) {
						field = fields[f];
						if (typeof row[field] !== 'undefined') {
							row[field].display_value = message.data.record[field].display_value;
						}
					}
				}
			}
		}
	}

	$scope.$on('$destroy', function () {
		if (watcher)
			watcher.unsubscribe();
	});

	$scope.setPageNum = function (num) {
		$scope.data.p = num;
		getData(true);
		$timeout(function () {
			$scope.focusOnTableHeader();
		});
	};

	$scope.setOrderBy = function (field) {
		var d = "asc";
		// descending default sort for date/time columns for UI consistency
		var fieldType = $scope.data.column_types[field];
		if (fieldType == "glide_date_time" || fieldType == "glide_date")
			d = "desc";
		if ($scope.data.o == field) {
			if ($scope.data.d == "asc")
				d = "desc";
			else
				d = "asc";
		}
		if (d === "asc") {
			spAriaUtil.sendLiveMessage($scope.data.msg.sortingByAsc);
		} else if (d === "desc") {
			spAriaUtil.sendLiveMessage($scope.data.msg.sortingByDesc);
		}
		$scope.data.o = field;
		$scope.data.d = d;
		$scope.data.setOrderUserPreferences = true;
		$scope.setSearch(true);
	};
	$scope.setSearch = function (updateUrl) {
		$scope.data.p = 1;
		if ($scope.data.keywords) {
			var previousSearchTerm = $scope.previousSearchTerm;
			if (previousSearchTerm) {
				previousSearchTerm = '123TEXTQUERY321=' + previousSearchTerm;
				var previousSearchTermStartIndex = $scope.data.filter.indexOf(previousSearchTerm);
				var previousSearchTermEndIndex = previousSearchTermStartIndex + previousSearchTerm.length;
				if (previousSearchTermStartIndex >= 0)
					$scope.data.filter = $scope.data.filter.substr(0, previousSearchTermStartIndex) + $scope.data.filter.substr(previousSearchTermEndIndex + 1, $scope.data.filter.length);
			}
			$scope.previousSearchTerm = $scope.data.keywords;
		}
		getData(updateUrl);
	};
	$scope.$on(eventNames.setFilter, function (e, newFilter) {
		$scope.data.filter = newFilter;
		$scope.setSearch(false);
	});
	$scope.$on(eventNames.setKeywords, function (e, keywords) {
		$scope.data.keywords = keywords;
		$scope.setSearch(false);
	});
	$scope.$on('widget-filter-breadcrumbs.queryModified', function (e, newFilter) {
		$scope.data.filter = newFilter;
		$scope.setSearch(true);
	});
	$scope.rowsWerePruned = function () {
		if (!$scope.data.list)
			return;
		$scope.rowsPruned = $scope.mathMin($scope.data.window_end, $scope.data.row_count) - $scope.data.window_start - $scope.data.list.length;
		return $scope.rowsPruned > 0;
	};
	$scope.showFilter = function () {
		return !$scope.data.list.length && !$scope.data.num_pages && !$scope.data.invalid_table && !$scope.loadingData;
	};
	c.appendQuery = function (query) {
		if ($scope.data.filter.length > 1)
			$scope.data.filter += '^';
		$scope.data.filter += query;
		$scope.setSearch();
	};
	// Makes Widget Async
	$scope.data = $scope.options;
	$scope.actions = JSON.parse($scope.data.actions_list);
	$scope.loadingData = true;
	$scope.highlightList = JSON.parse($scope.data.highlight_list);
	$scope.additionalButtons = JSON.parse($scope.data.additional_buttons);
	$scope.headerStyle = JSON.parse($scope.data.header_styles);
	$scope.highlightColumnList = [];
	$scope.highlightColumns = {};
	$scope.highlightRowList = [];
	$scope.highlightRows = {};
	$scope.highlightColumnAlias = {};
	for (var i in $scope.highlightList) {
		var highlightEntry = $scope.highlightList[i];
		if (highlightEntry.scope == undefined || highlightEntry.scope == 'column') {
			var columnName = highlightEntry.fieldName;
			$scope.highlightColumnList.push(columnName);

			var columnAlias = highlightEntry.extField;
			var includeInKey = 'false';
			if (columnAlias != undefined && columnAlias != "") {
				$scope.highlightColumnAlias[columnName] = columnAlias;
				includeInKey = 'true';
			}

			for (var f in highlightEntry.higlight) {
				if (includeInKey == 'true') {
					$scope.highlightColumns[columnName + "###" + columnAlias + "###" + highlightEntry.higlight[f].value] = highlightEntry.higlight[f].style;
				} else
					$scope.highlightColumns[columnName + "###" + highlightEntry.higlight[f].value] = highlightEntry.higlight[f].style;
			}
		}
		if (highlightEntry.scope == 'row') {
			var rowName = highlightEntry.fieldName;
			$scope.highlightRowList.push(rowName);
			for (var fg in highlightEntry.higlight) {
				$scope.highlightRows[rowName + "###" + highlightEntry.higlight[fg].value] = highlightEntry.higlight[fg].style;
			}
		}
	}
	$scope.server.update().then(function () {
		if ($scope.data.newButtonUnsupported)
			gs.log("Service Portal: New button not supported for sys_attachment list");
		$scope.loadingData = false;
		initRecordWatcher($scope.data.table, $scope.data.filter);
		$scope.checkAndSetTinyUrl();
	});

	function parseQuery(table, queryString) {
		return $http.post('/api/now/sp/parsequery/' + table, queryString).then(function (response) {
			return response.data.result;
		});
	}
	c.createQueryTerm = function (table, field, sys_id, operator) {
		return $http.get('/api/now/sp/getInOutQueryTerm', {
			params: {
				table: table,
				sys_id: sys_id,
				field: field,
				operator: operator
			}
		}).then(function (response) {
			if (response && response.data && response.data.result)
				return response.data.result.parts;
		});
	};
	c.isMultiPart = function (terms) {
		for (var i = 0; i < terms.length; i++) {
			var term = terms[i];
			while (term.left)
				term = term.left;
			if (term.NQ)
				return true;
		}
		return false;
	};
	c.showMatching = function (field, newTerm) {
		var queryString = $scope.data.filter;
		var eq = "";
		parseQuery($scope.data.table, queryString).then(function (oldTerms) {
			var isMultiPart = c.isMultiPart(oldTerms);
			for (var i = 0; i < oldTerms.length; i++) {
				var term = oldTerms[i];
				if (!isMultiPart && isSameField(newTerm, term))
					continue;
				if (eq.length)
					eq += '^';
				var termNQCheck = oldTerms[i];
				while (termNQCheck.left)
					termNQCheck = termNQCheck.left;
				if (termNQCheck.NQ) {
					// query is multipart so apply new term to each part
					eq += getEncodedTerm(newTerm);
					eq += "^NQ";
				}
				eq += getEncodedTerm(term);
			}
			if (eq.length)
				eq += '^';
			eq += getEncodedTerm(newTerm);

			$scope.data.filter = eq;
			$scope.setSearch();
			$location.search(angular.extend($location.$$search, {
				spa: 1,
				filter: eq,
				p: $scope.data.p
			}));
		});
	};
	c.filterOut = function (field, newTerm) {
		var eq = "";
		if ($scope.data.filter.indexOf("^NQ") == -1) {
			eq = $scope.data.filter;
			if (eq.length)
				eq += '^';
			eq += getEncodedTerm(newTerm);
			$scope.data.filter = eq;
			$scope.setSearch();
			$location.search(angular.extend($location.$$search, {
				spa: 1,
				filter: eq,
				p: $scope.data.p
			}));
			return;
		}
		var queryString = $scope.data.filter;
		parseQuery($scope.data.table, queryString).then(function (oldTerms) {
			for (var i = 0; i < oldTerms.length; i++) {
				var term = oldTerms[i];
				if (eq.length)
					eq += '^';
				var termNQCheck = oldTerms[i];
				while (termNQCheck.left)
					termNQCheck = termNQCheck.left;
				if (termNQCheck.NQ) {
					eq += getEncodedTerm(newTerm);
					eq += "^NQ";
				}
				eq += getEncodedTerm(term);
			}
			if (eq.length)
				eq += '^';
			eq += getEncodedTerm(newTerm);
			$scope.data.filter = eq;
			$scope.setSearch();
			$location.search(angular.extend($location.$$search, {
				spa: 1,
				filter: eq,
			}));
		});
	};

	function isSameField(t1, t2) {
		if ('left' in t1 && 'left' in t2)
			return t1.left.query_term_field === t2.left.query_term_field;
		else if ('left' in t1)
			return t1.left.query_term_field === t2.query_term_field;
		else if ('left' in t2)
			return t1.query_term_field === t2.left.query_term_field;
		return t1.query_term_field === t2.query_term_field;
	}

	function getEncodedTerm(term) {
		var eq;
		if (term.left) {
			eq = getEncodedTerm(term.left);
			eq += '^OR';
			eq += getEncodedTerm(term.right);
		} else {
			eq = term.query_term_field;
			eq += term.operator;
			eq += term.value;
		}
		return eq;
	}

	c.filterGroup = function () {
		if (!c.groupQuery) {
			$scope.data.filter = "";
			$scope.setSearch();
			return;
		}
		var groupNameQuery = "groupLIKE" + c.groupQuery;
		//$scope.data.filter = $scope.data.filter+"^"+groupNameQuery;
		$scope.data.filter = groupNameQuery;
		$scope.setSearch();
		return;
	}

	if ($scope.data.table == 'x_aleen_snguardian_visitor_visit') {
		if (c.data.userRoles.includes('x_aleen_snguardian.portal')) {
			var queryTemplate = 'visitor=${visitorId}^ORvisitorsLIKE${visitorId}^is_deleted=false';
			var verifiedVisitor = localStorage.getItem("verifedVisitor");
			if (verifiedVisitor != undefined) {
				var visitor = JSON.parse(verifiedVisitor);
				var visitorId = visitor.visitorId;
				var encodedQuery = queryTemplate.replaceAll('${visitorId}', visitorId);
				$scope.data.filter = encodedQuery;
				$scope.options.show_breadcrumbs = false;
				$scope.setSearch();
			}
		} else if (c.data.userRoles.includes('x_aleen_snguardian.host')) {
			var identityId = c.data.identity_id;
			var userId = c.data.user_id;
			var userName = c.data.user_name;
			var hostQueryTemplate = 'hostLIKE${userId}^ORescrortLIKE${userId}^ORsys_created_by=${userName}^start_date>=javascript:gs.beginningOfToday()^is_deleted=false';
			var hostencodedQuery = hostQueryTemplate.replaceAll('${identityId}', identityId);
			var hostencodedQueryUpdated = hostencodedQuery.replaceAll('${userName}', userName);
			var hostencodedQueryFinal = hostencodedQueryUpdated.replaceAll('${userId}', userId);
			$scope.data.filter = hostencodedQueryFinal;
			$scope.options.show_breadcrumbs = false;
			//$scope.data.enable_filter = false;
			$scope.setSearch();
		}
	}
}
