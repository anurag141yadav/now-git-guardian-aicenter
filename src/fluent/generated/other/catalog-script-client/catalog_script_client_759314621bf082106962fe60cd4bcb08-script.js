function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var gaWorkerDetails = new GlideAjax('IdentityClientScriptHelper');
    gaWorkerDetails.addParam('sysparm_name', 'getWorkerDetailsDetails');
    gaWorkerDetails.addParam('property_value', newValue);
    gaWorkerDetails.addParam('property_name', 'email');
    gaWorkerDetails.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
        if (null != response) {
            //var res = JSON.parse(response);
			//if(res.type == temp worker){ // exisiting logic}
			//else{set one hidden variable value as false - check on submit }
            var confirm_msg = confirm("Worker already exists. Do you want to continue editing?");
            if ((!confirm_msg)) { 
                g_form.clearValue('worker_first_name');
                g_form.clearValue('worker_last_name');
                g_form.clearValue('worker_phone');
                g_form.clearValue('worker_department');
                g_form.clearValue('worker_manager');
                g_form.clearValue('worker_email');
            } else {
                var res = JSON.parse(response);
                //response.status if(terminated) else alert msg - check here or with confirmation msg above
                //or boolean val in response - check for status and validity in identityclientscript helper
                if (res.status != 'ACTIVE') {
                    // User chose to continue but worker is active
                    g_form.setValue('request_for', res.worker_sysid);
                    g_form.setValue('worker_first_name', res.first_name);
                    g_form.setValue('worker_last_name', res.last_name);
                    g_form.setValue('worker_phone', res.phone);
                    g_form.setValue('worker_department', res.department);
                    g_form.setValue('worker_manager', res.manager);
                } else {
					alert('User is already active');
                    g_form.clearValue('worker_first_name');
                    g_form.clearValue('worker_last_name');
                    g_form.clearValue('worker_phone');
                    g_form.clearValue('worker_department');
                    g_form.clearValue('worker_manager');
                    g_form.clearValue('worker_email');
                }
            }

        }
    }
    //Type appropriate comment here, and begin script below

}