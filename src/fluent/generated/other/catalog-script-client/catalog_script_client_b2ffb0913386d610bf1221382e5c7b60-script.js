function onLoad() {
    var verifiedVisitor = localStorage.getItem("verifedVisitor");
    if (verifiedVisitor != undefined) {
        var visitor = JSON.parse(verifiedVisitor);
        g_form.setValue('visitor_self_service_visitor', visitor.visitorId);
        g_form.setReadOnly('visitor_self_service_visitor', true);
    }
}