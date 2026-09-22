(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
    var transformName = map ? map.name : 'Transform';
    var systemName = '';
    if (target && target.system)
        systemName = target.system.getDisplayValue();
    var identityGr = new GlideRecordSecure('x_aleen_snguardian_identity');
    identityGr.addQuery('user_name', source.u_user_name);
    identityGr.query();
    if (identityGr.next()) {
        identityGr.work_notes = transformName + " assigned  system (" + systemName + ") in Identity System as part of User Creation.";
        identityGr.update();
    }
})(source, map, log, target);