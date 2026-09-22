(function process(request, response) {
    var service = new McProvisionService();
    response.setBody(service.getSession(request.queryParams.email ? request.queryParams.email[0] : null));
})(request, response)