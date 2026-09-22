function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		g_form.setValue('required_assertions', []);
		return;
	}
	var initRequiredAssertions = [];
	g_form.setValue('required_assertions', initRequiredAssertions);
	var access_levels = g_form.getValue("access_levels");
	var gaAccessAssertions = new GlideAjax("x_aleen_snguardian.ClientServerRelay");
	gaAccessAssertions.addParam("sysparm_name", "getAccessAssertations");
	var accessList = JSON.parse(access_levels);
	for (var i = 0; i < accessList.length; i++) {
		gaAccessAssertions.addParam("sysparm_access_id", accessList[i].access_level);
		gaAccessAssertions.getXMLAnswer(callback);
	}
	function callback(response) {
		
		if(response != 'No required assertions'){
			response = JSON.parse(response);
			for(var j=0; j < response.length; j++){
				var isExisting = false;
				var existing_attest = g_form.getValue("required_assertions");
				try {
					existing_attest = JSON.parse(existing_attest);
					for (var i = 0; i < existing_attest.length; i++) {
						if (response[j].required_for==undefined || (existing_attest[i].required_for == response[j].required_for && existing_attest[i].name == response[j].name )) {
							isExisting = true;
						}
					}
					if (!isExisting) {
						existing_attest.push(response[j]);
					}
				
				} catch (e) {
					existing_attest = [];
					for(var j=0;j<response.length;j++){
						existing_attest.push(response[j]);
					}
				}
				g_form.setValue("required_assertions", JSON.stringify(existing_attest));
			}
		}
	}

}