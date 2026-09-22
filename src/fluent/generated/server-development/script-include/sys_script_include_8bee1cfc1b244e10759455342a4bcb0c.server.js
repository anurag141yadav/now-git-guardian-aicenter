var AuthenticationUtil = Class.create();
AuthenticationUtil.prototype = {
    initialize: function(system_id) {
        this.system_id = system_id;
		this.logger = new AlertGuardianLogger("AuthenticationUtil");
    },
    getToken: function() {
        try {
            var inputs = {};
            inputs['system_id'] = this.system_id; 
            var result = sn_fd.FlowAPI.getRunner().subflow('x_aleen_snguardian.alert_authentication_subflow').inForeground().withInputs(inputs).run();
            var outputs = result.getOutputs();
			return {
				'success' : outputs.success,
				'token' : outputs.token,
				'message' : outputs.message
			};
        }catch(e){
			this.logger.error("getToken Exception => "+e+" \nstack => "+e.stack);
		}
    },
    type: 'AuthenticationUtil'
};