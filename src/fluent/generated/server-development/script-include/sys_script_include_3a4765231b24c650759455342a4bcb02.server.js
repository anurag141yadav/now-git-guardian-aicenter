var ProvisioningHelper = Class.create();
ProvisioningHelper.prototype = {
    initialize: function(system_number) {
        this.system_number = system_number;
        this.systemUtil = new SystemUtil(system_number);
        this.system = this.systemUtil.getSystem();
        this.logger = new AlertGuardianLogger(" ProvisioningHelper:: ");
    },
    execute: function(data, functionName, options) {
        try {
            var answer = {};
            var provMonitorUtil = new ProvisioningMonitorUtil();
            var prov_monitor_id = "";
            var function_sys_id = "";

            var systemAPIgr = this.systemUtil.getFunction(functionName);
            if (null != systemAPIgr && systemAPIgr.next()) {
                if (options && options.id) {
                    var grProvQueue = new GlideRecordSecure("x_aleen_snguardian_provisioning_queue");
                    grProvQueue.addQuery("record_id", options["id"]);
                    grProvQueue.addQuery("is_processed", false);
                    grProvQueue.setLimit(1);
                    grProvQueue.query();
                    if (grProvQueue.next()) {
                        options['monitor_sys_id'] = grProvQueue.getValue("provisioning_record");
                        options['queue_sys_id'] = grProvQueue.getUniqueValue();
                    }
                }
                var isLimitExceeded = provMonitorUtil.checkThreshold(this.system.getValue('sys_id'), this.system.getValue('rate_limit_count'), systemAPIgr.getValue("category"), options["SKIP_QUEUE"]);
                // processing record from queue as limit not exceeded and prov monitor value present
                if (!isLimitExceeded && options['monitor_sys_id']) {
                    prov_monitor_id = options['monitor_sys_id'];
                    provMonitorUtil.update(options['monitor_sys_id'], options['queue_sys_id']);
                }
                // not processing queue record as limit is exceeded
                else if (options['monitor_sys_id'] && isLimitExceeded) {
                    return {
                        "ADDED_TO_QUEUE": true
                    };
                }
                //add to queue if limit exceeded and data["SKIP_QUEUE"] not present
                else if (isLimitExceeded) {
                    prov_monitor_id = provMonitorUtil.createQueue(this.system.getValue('sys_id'), systemAPIgr.getUniqueValue(), systemAPIgr.getValue('category'), functionName, data, options);
                    return {
                        "ADDED_TO_QUEUE": true
                    };
                }
                // limit not exceeded proceed or is a child request with "SKIP_QUEUE"
                else if (!isLimitExceeded) {
                    prov_monitor_id = provMonitorUtil.create(this.system.getValue('sys_id'), systemAPIgr.getUniqueValue(), systemAPIgr.getValue('category'), data);
                }

                if (null != options) {
                    for (var option in options) {
                        data[option] = options[option];
                    }
                }
                this.logger.info(" execute [" + functionName + "] ==> Begin");
                var response;
                var api_request_http_type = "POST";
                var api_request_body = "";
                var request_url = "";
                var payload_handler_response = {};
                var pre_validation_required = false;
                var stringUtil = new StringUtil();
                request_url = systemAPIgr.getValue('url');
                if ((request_url != null && request_url == "") || request_url == null) {
                    return this.executeScript(data, functionName, options);
                }
                if (null != systemAPIgr.type) {
                    api_request_http_type = systemAPIgr.type.toLowerCase();
                }
                api_request_body = systemAPIgr.getValue('payload');
                pre_validation_required = systemAPIgr.pre_validation_required;
                if (pre_validation_required) {
                    var validationEvaluator = new GlideScopedEvaluator();
                    validationEvaluator.putVariable('data', data);
                    var pre_validation_response = validationEvaluator.evaluateScript(systemAPIgr, 'pre_validation_script', null);
                    if (!pre_validation_response.prevalidation) {
                        return pre_validation_response;
                    } else {
                        if (pre_validation_response.request_url) {
                            request_url = stringUtil.replacePlaceholders(request_url, pre_validation_response);
                        }
                        if (pre_validation_response.payload) {
                            api_request_body = pre_validation_response.payload;
                        }
                    }
                }
                var last_success_datetime = systemAPIgr.last_success_datetime;
                if (last_success_datetime) { // can be null undefined empty so checking all
                    data['last_success_datetime'] = last_success_datetime;
                } else {
                    data['last_success_datetime'] = "";
                    data['system_num'] = this.system_number;
                }
                var last_event_position = systemAPIgr.last_event_position;
                if (last_event_position) { // can be null undefined empty so checking all
                    data['last_event_position'] = last_event_position;
                } else {
                    data['last_event_position'] = "";
                }
                data['new_run_datetime'] = new GlideDateTime().getNumericValue().toString();
                // TODO payload_handler empty / NULL check
                var evaluator = new GlideScopedEvaluator();
                evaluator.putVariable('data', data);
                payload_handler_response = evaluator.evaluateScript(systemAPIgr, 'payload_handler', null);
                for (var payloadKey in payload_handler_response) {
                    data[payloadKey] = payload_handler_response[payloadKey];
                }
                var authenticationUtil = new AuthenticationUtil(this.system_number);
                var authResponse = authenticationUtil.getToken();
                if (authResponse["success"]) {
                    if (authResponse["token"] && authResponse["token"] != "") {
                        data['token'] = authResponse['token'];
                    }
                } else {
                    //Prov util and logger 
                    provMonitorUtil.updateFail(prov_monitor_id, 'ERROR');
                    provMonitorUtil.addWorknotes(prov_monitor_id, authResponse["message"]);
                    return {
                        'success': false,
                        'message': 'Authentication Failed :: ' + authResponse['message']
                    };
                }

                var api_endpoint = this.system.getValue('host') + request_url;
                if (api_endpoint.indexOf('${') !== -1) {
                    api_endpoint = stringUtil.replacePlaceholders(api_endpoint, data);
                }
                this.logger.debug(" execute [" + functionName + "]   endpoint   ==>" + api_endpoint);
                var request = new sn_ws.RESTMessageV2();
                request.setHttpMethod(api_request_http_type);
                request.setEndpoint(api_endpoint);
                var requestHeaders = this.systemUtil.getParameters('REQ_HEADER');
                for (var key in requestHeaders) {
                    if (data.hasOwnProperty(key)) {
                        request.setRequestHeader(key, data[key]);
                    } else if (requestHeaders.hasOwnProperty(key)) {
                        if (null != requestHeaders[key] && requestHeaders[key].indexOf('${') !== -1) {
                            var stringUtilNew = new StringUtil();
                            var headerValue = stringUtilNew.replacePlaceholders(requestHeaders[key], data);
                            request.setRequestHeader(key, headerValue);
                        } else {
                            request.setRequestHeader(key, requestHeaders[key]);
                        }
                    }
                }
                var queryParams = this.systemUtil.getParameters('QUERY');
                for (var k in queryParams) {
                    if (data.hasOwnProperty(k)) {
                        request.setQueryParameter(k, data[k]);
                    } else if (queryParams.hasOwnProperty(k)) {
                        if (null != queryParams[k] && queryParams[k].indexOf('${') !== -1) {
                            stringUtilNew = new StringUtil();
                            queryValue = stringUtilNew.replacePlaceholders(queryParams[k], data);
                            request.setQueryParameter(k, queryValue);
                            this.logger.debug(" execute [" + functionName + "]  query    [ " + k + "]  value ==    [ " + queryValue + "]");
                        } else {
                            request.setQueryParameter(k, queryParams[k]);
                            this.logger.debug("ProvisioningHelper [" + functionName + "]  query    [ " + k + "]  value ==    [ " + queryParams[key] + "]");
                        }
                    }
                }
                var has_body = false;
                if (api_request_body !== '' && api_request_body !== null) {
                    has_body = true;
                    var replaceStringUtil = new StringUtil();
                    var requestBody = replaceStringUtil.replacePlaceholders(api_request_body, data);
                    request.setRequestBody(requestBody);
                }
                if (this.system.mid_server) {
                    request.setEccParameter("skip_sensor", "true");
                    request.setMIDServer(this.system.mid_server.name);
                }

                if ((api_request_http_type == "DELETE" || api_request_http_type == "delete") && has_body) {
                    this.logger.info(" execute [" + functionName + "]  execute()");
                    provMonitorUtil.updateStartTime(prov_monitor_id); //updating start time
                    response = request.execute();
                } else {
                    this.logger.info(" execute [" + functionName + "]  executeAsync()");
                    provMonitorUtil.updateStartTime(prov_monitor_id); //updating start time
                    response = request.executeAsync();
                    /*
                    if (this.system.mid_server) {
                    response.waitForResponse(60);
                    }
                     */
                }
                var responseBody = response.getBody();
                var httpStatus = response.getStatusCode();
                if (httpStatus == 200) {
                    var successResponseEvaluator = new GlideScopedEvaluator();
                    successResponseEvaluator.putVariable('data', data);
                    successResponseEvaluator.putVariable('responseBody', responseBody);
                    successResponseEvaluator.putVariable('options', options);
					if(!options['DISABLE_LAST_SUCCESS_DATETIME_UPDATE']){
						var last_run_epoach = data['new_run_datetime'];
						var lastRun = new GlideDateTime();
						lastRun.setNumericValue(last_run_epoach);
						systemAPIgr.last_success_datetime = lastRun;
						systemAPIgr.update();
					}
                    provMonitorUtil.updateSuccess(prov_monitor_id, 'SUCCESS');
                    provMonitorUtil.addWorknotes(prov_monitor_id, responseBody);
                    return successResponseEvaluator.evaluateScript(systemAPIgr, 'success_response_handler', null);
                } else {
                    var errorResponseEvaluator = new GlideScopedEvaluator();
                    errorResponseEvaluator.putVariable('data', data);
                    errorResponseEvaluator.putVariable('responseBody', responseBody);
                    errorResponseEvaluator.putVariable('options', options);
                    systemAPIgr.last_failure_datetime = new GlideDateTime();
                    systemAPIgr.update();
                    provMonitorUtil.updateFail(prov_monitor_id, 'ERROR');
                    provMonitorUtil.addWorknotes(prov_monitor_id, responseBody);
                    return errorResponseEvaluator.evaluateScript(systemAPIgr, 'error_response_handler', null);
                }
            } else {
                answer['success'] = true;
                answer['message'] = "[SUCCESS - [" + functionName + "] completed successfully. !!!!]";
                answer['identifier'] = gs.generateGUID();
                return answer;
            }
        } catch (e) {
            this.logger.error("execute Exception :: [" + functionName + "] : " + e + " \nStack\n " + e.stack);
            answer['success'] = false;
            answer['message'] = "FAILURE - [" + functionName + "] Exception => :" + e + " \n stack \n" + e.stack;
            if (prov_monitor_id) {
                provMonitorUtil.updateFail(prov_monitor_id, 'ERROR');
                provMonitorUtil.addWorknotes(prov_monitor_id, answer['message']);
            }
            return answer;
        }
    },
    executeScript: function(data, functionName, options) {
        this.logger.info(" executeScript [" + functionName + "]");
        var answer = {};
        var systemAPIgr = this.systemUtil.getFunction(functionName);
        payload_handler_response = {};
        pre_validation_required = false;
        if (null != systemAPIgr && systemAPIgr.next()) {
            pre_validation_required = systemAPIgr.pre_validation_required;
            if (pre_validation_required) {
                pre_validation_response_is_a_success = true;
                var validationEvaluator = new GlideScopedEvaluator();
                validationEvaluator.putVariable('data', data);
                pre_validation_response_is_a_success = validationEvaluator.evaluateScript(systemAPIgr, 'pre_validation_script', null);
                if (!pre_validation_response_is_a_success) {
                    answer['success'] = false;
                    answer['message'] = "Pre validation is failed";
                    return answer;
                }
            }
            // TODO payload_handler empty / NULL check
            var evaluator = new GlideScopedEvaluator();
            evaluator.putVariable('data', data);
            payload_handler_response = evaluator.evaluateScript(systemAPIgr, 'payload_handler', null);
            for (var payloadKey in payload_handler_response) {
                data[payloadKey] = payload_handler_response[payloadKey];
            }
            var successResponseEvaluator = new GlideScopedEvaluator();
            successResponseEvaluator.putVariable('data', data);
            successResponseEvaluator.putVariable('options', options);
            return successResponseEvaluator.evaluateScript(systemAPIgr, 'success_response_handler', null);
        }
    },
    callAsync: function() {
        this.initialize(system_number);
        this.execute(data, functionName, options);
    },
    type: 'ProvisioningHelper'
};