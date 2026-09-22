var ValueHelper = Class.create();
ValueHelper.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    getDraftStatusCode: function() {
        var grStatusCode = new GlideRecordSecure('x_aleen_snguardian_status_code');
        grStatusCode.addQuery('code', 'DRAFT');
		grStatusCode.setLimit(1);
        grStatusCode.query();
        if (grStatusCode.next()) {
            return grStatusCode.getValue('sys_id');
        }
    },
    getIdByStatus: function(status) {
        var grStatusCode = new GlideRecordSecure('x_aleen_snguardian_status_code');
        grStatusCode.addQuery('code', status);
		grStatusCode.setLimit(1);
        grStatusCode.query();
        if (grStatusCode.next()) {
            return grStatusCode.getUniqueValue();
        }
    },
    getIdByEntityAction: function(action) {
        var grEntityAction = new GlideRecordSecure('x_aleen_snguardian_request_entity_action');
        grEntityAction.addQuery('code', action);
		grEntityAction.setLimit(1);
        grEntityAction.query();
        if (grEntityAction.next()) {
            return grEntityAction.getUniqueValue();
        }
    },
    getAplicationScope: function() {
		var logger = new AlertGuardianLogger(" ValueHelper:: ");
		try{
			var tableName = this.getParameter('sysparm_table');
			var grTab = new GlideRecord('sys_db_object');
			grTab.addQuery('name', tableName);
			grTab.setLimit(1);
			grTab.query();
			if (grTab.next()) {
				return grTab.sys_scope.toString();
			}
			return '';
		}catch(e){
			this.logger.error("getAplicationScope Exception :: " + e + " \nStack\n " + e.stack);
			return "";
		}
    },
    prepareJobScript: function() {
		var logger = new AlertGuardianLogger(" ValueHelper:: ");
		try{
			var function_sys_id = this.getParameter('function_sys_id');
			var grSystemFunction = new GlideRecordSecure('x_aleen_snguardian_system_function');
			if (function_sys_id && grSystemFunction.get(function_sys_id))  {
				var function_to_run = grSystemFunction.getElement('function') ? grSystemFunction.getElement('function').code : "";
				if (function_to_run != null && function_to_run != "") {
					var data = {};
					data['function_to_run'] = function_to_run;
					var script_base = "";
					if (function_to_run == 'LOGIN') {
						script_base = `var grSystem = new GlideRecordSecure('x_aleen_snguardian_system');
	if (grSystem.get(current.system)) {
		var authenticationUtil = new AuthenticationUtil(grSystem.number);
		authenticationUtil.getToken();
	}`;
					} else {
						script_base = `var grJobHistory = new GlideRecordSecure('x_aleen_snguardian_system_scheduled_job_history'); 
	grJobHistory.status = 'Started';
	grJobHistory.script = current.getUniqueValue();
	grJobHistory.datasource = current.getUniqueValue();
	grJobHistory.datasource_table = "x_aleen_snguardian_system_scheduled_job";
	var historyId = grJobHistory.insert();  
	var grSystem = new GlideRecordSecure('x_aleen_snguardian_system');
	if (grSystem.get(current.system)) {
		var data = new GuardianGlideRecordUtil().toJSON(grSystem, null);
		data['history_id'] = historyId;
		data["datasource.sys_id"] = current.getUniqueValue();
		data["datasource_table"] = "x_aleen_snguardian_system_scheduled_job";
		var provHelper = new ProvisioningHelper(grSystem.number);
		provHelper.execute(data, '${function_to_run}',{});
	}`;
					}
					var replacer = new StringUtil();
					var replaced_script = replacer.replacePlaceholders(script_base, data);
					return replaced_script;
				}
				return "";
			}
			return "";
		}catch(e){
			this.logger.error("prepareJobScript Exception :: " + e + " \nStack\n " + e.stack);
			return "";
		}
    },
    type: 'ValueHelper'
});