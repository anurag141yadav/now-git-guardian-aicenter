(function process(request, response) {
    var body = request.body.data || {};
    var service = new McProvisionService();
    response.setBody({ responseRequest: service.addToWallet(body.identityId, body.sourceId) });
})(request, response)