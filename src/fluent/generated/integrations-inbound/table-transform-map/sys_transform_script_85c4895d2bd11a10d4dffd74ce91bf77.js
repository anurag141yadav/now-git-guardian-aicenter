(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
    var grSysFeature = new GlideRecordSecure("x_aleen_snguardian_system_features");
    grSysFeature.addQuery("system.code", source.u_system);
    grSysFeature.addQuery("feature.code", "MOBILE-CREDENTIAL-SERVER");
    grSysFeature.setLimit(1);
    grSysFeature.query();
    if (grSysFeature.next()) {
        if (grSysFeature.value && (grSysFeature.value.toLowerCase() == 'yes' || grSysFeature.value == true || grSysFeature.value == "true")) {
            ignore = true;
        }
    }
})(source, map, log, target);