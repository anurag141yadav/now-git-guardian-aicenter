function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }

    g_form.hideFieldMsg('request_for');
    var gaUserAssets = new GlideAjax('IdentityClientScriptHelper');
    gaUserAssets.addParam('sysparm_name', 'getUserAssets');
    gaUserAssets.addParam('userId', newValue);
    gaUserAssets.getXMLAnswer(userDatacallback);

    function userDatacallback(response) {
        g_form.setValue('assets', response);
        var data = JSON.parse(response);
        if (data.length < 1) {
            g_form.showFieldMsg('request_for', "No assets found");
        } 
    }
   
}