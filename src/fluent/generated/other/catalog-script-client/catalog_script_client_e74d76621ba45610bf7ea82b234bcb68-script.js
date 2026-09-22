function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	var gaWorkerDetails = new GlideAjax('IdentityClientScriptHelper');
    gaWorkerDetails.addParam('sysparm_name', 'getWorkerDetailsDetails');
    gaWorkerDetails.addParam('property_value', g_form.getValue('worker_email'));
    gaWorkerDetails.addParam('property_name', 'email');
    gaWorkerDetails.getXMLAnswer(userDatacallback);
    var request_for;

    function userDatacallback(response) {
        if (null != response) {
			response = JSON.parse(response);
            request_for = response.worker_sysid;

			if(request_for!=null && request_for){
				var userSystemResponse = JSON.parse(response.userSystems);
				if(null!=userSystemResponse && userSystemResponse.length>0){
					for(var ind = 0 ; ind<userSystemResponse.length ; ind++){
						var formDateString = g_form.getValue('work_start_date');
						var systemDateString = userSystemResponse[ind].system_valid_to;
						var formValidFrom = new Date(formDateString);
						var systemValidTo = new Date(systemDateString);
						if(systemValidTo>formValidFrom){
							alert('Worker is in terminated State, Please confirm Start Date');
							g_form.clearValue('work_start_date');
						}
					}
				}	
			}
        }
    }
   
}