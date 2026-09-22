function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
    var gaUserAccess = new GlideAjax('IdentityClientScriptHelper');
    gaUserAccess.addParam('sysparm_name', 'getUserAccess');
    gaUserAccess.addParam('userId', newValue);
    gaUserAccess.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
        g_form.setValue('access_levels', response);
    }
   
}