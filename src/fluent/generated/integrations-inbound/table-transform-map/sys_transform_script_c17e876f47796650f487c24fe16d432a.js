(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
    if ((source.u_type != null && source.u_type.includes("MOBILE_CREDENTIAL")) &&
        (source.u_status == "ACTIVE" || source.u_status == "INACTIVE")) {
        ignore = true;
    }
})(source, map, log, target);