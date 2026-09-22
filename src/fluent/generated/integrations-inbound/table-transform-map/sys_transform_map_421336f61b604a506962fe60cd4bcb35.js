(function transformRow(source, target, map, log, isUpdate) {

    // identify Identity based on data , if not found ignore
    if (action == "insert" && source.u_source_system_code != "NONE") {
        if (source.u_user_name != null && source.u_user_name != '') {
            if (source.u_type && (source.u_type.toString().toLowerCase().includes("worker"))) {
                target.identity = target.identifier;
            } else {
                var identityGr = new GlideRecordSecure('x_aleen_snguardian_identity');
                identityGr.addQuery('user_name', source.u_user_name);
                identityGr.query();
                if (identityGr.next()) {
                    target.identity = identityGr.getUniqueValue();
                } else {
                    ignore = true;
                }
            }

        } else {
            ignore = true;
        }
    }
    else {
        ignore = true;
    }

})(source, target, map, log, action === "update");