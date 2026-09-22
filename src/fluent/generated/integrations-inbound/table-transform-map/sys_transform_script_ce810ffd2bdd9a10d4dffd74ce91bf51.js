(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
	//gs.info("Identity transform (onbefore) "+ target.sys_id);
    if (!target.sys_id) 
	{
        //gs.info("no record found, updating identity type ");
		var grIdentityType = null;
        if (source.u_type == null || (source.u_type != null && (source.u_type == '' || source.u_type == 'EMPLOYEE'))) {
            grIdentityType = new GlideRecordSecure('x_aleen_snguardian_identitytype');
            grIdentityType.addQuery('code', 'EMPLOYEE');
            grIdentityType.query();
            if (grIdentityType.next()) {
                target.type = grIdentityType.getUniqueValue();
            }
        } else if (source.u_type != null && (source.u_type.toLowerCase().includes("worker"))) {
            grIdentityType = new GlideRecordSecure('x_aleen_snguardian_identitytype');
            grIdentityType.addQuery('code', 'TEMPWORKER');
            grIdentityType.query();
            if (grIdentityType.next()) {
                target.type = grIdentityType.getUniqueValue();
            }
        } else if (source.u_type != null && (source.u_type.toLowerCase().includes("visitor"))) {
            grIdentityType = new GlideRecordSecure('x_aleen_snguardian_identitytype');
            grIdentityType.addQuery('code', 'VISITOR');
            grIdentityType.query();
            if (grIdentityType.next()) {
                target.type =  grIdentityType.getUniqueValue();
            }
        }
    }

})(source, map, log, target);