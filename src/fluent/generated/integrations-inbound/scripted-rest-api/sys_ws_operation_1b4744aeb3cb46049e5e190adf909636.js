(function process(request, response) {
    var body = request.body.data || {};
    var service = new McProvisionService();
    var identity = service.resolveIdentity();
    if (!identity.email) {
        response.setStatus(400);
        response.setBody({ error: 'Identity not found for current user' });
        return;
    }
    var tokens = service.getProvisioningTokens(identity.email, body.identityId, body.sourceId);
    response.setBody({
        issuanceToken: tokens ? tokens.issuanceToken : null,
        provisioningToken: tokens ? tokens.provisioningToken : null
    });
})(request, response)