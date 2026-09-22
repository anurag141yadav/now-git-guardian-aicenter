(function process(request, response) {
    var body = request.body.data || {};
    var service = new McProvisionService();
    try {
        response.setBody({ success: true, blob: service.provisionGoogle(body.code, body.identityId, body.sourceId) });
    } catch (e) {
        response.setBody({ success: false, error: e.message || 'Provisioning failed' });
    }
})(request, response)