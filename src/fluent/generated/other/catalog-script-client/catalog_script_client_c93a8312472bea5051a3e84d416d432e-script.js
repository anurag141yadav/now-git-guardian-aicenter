function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
   var gaUserAttestations = new GlideAjax("x_aleen_snguardian.IdentityClientScriptHelper");
   gaUserAttestations.addParam("sysparm_name","getUserAttestations");
   gaUserAttestations.addParam("userId",newValue);
   gaUserAttestations.getXMLAnswer(callback);
   function callback(response){
	g_form.setValue("user_attestations",response);
   }
   
}