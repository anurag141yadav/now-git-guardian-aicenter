(function process(request, response) {
    var service = new McProvisionService();
    response.setBody(service.getSession());
})(request, response)