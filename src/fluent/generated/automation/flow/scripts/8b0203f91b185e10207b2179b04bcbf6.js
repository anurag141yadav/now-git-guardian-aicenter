(function execute(inputs, outputs) {
    var iden_asset = inputs.identity_asset;
    var grIdenAccess = new GlideRecordSecure("x_aleen_snguardian_identity_access");
    grIdenAccess.addQuery("associated_asset", iden_asset.getValue("replace_asset"));
    grIdenAccess.query();
    while (grIdenAccess.next()) {
        grIdenAccess.setValue("associated_asset", iden_asset.getValue("asset"));
        grIdenAccess.setValue("provisioning_action", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "ADD"));
        grIdenAccess.setValue("valid_from", iden_asset.getValue("valid_from"));
        grIdenAccess.setValue("valid_to", iden_asset.getValue("valid_to"));
        grIdenAccess.update();
    }
    outputs.access = grIdenAccess.getRowCount();
})(inputs, outputs);