(function execute(inputs, outputs) {
    var system_id = inputs.system_id;
    var authHelper = new AuthenticationTokenHelper(system_id);
    var authResponse = authHelper.getStoredToken();
    outputs.success = authResponse["success"]?authResponse["success"]:false;
    outputs.token = authResponse["token"]? authResponse["token"]:null;
    outputs.message = authResponse["message"]?authResponse["message"]:"";
})(inputs, outputs);