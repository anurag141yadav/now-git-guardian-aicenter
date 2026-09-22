(function executeRule(current, previous /*null when async*/ ) {
    try {
        var logger = new AlertGuardianLogger("BR Trigger Identity Update Prov");
        var metaHelper = new MetadataGlideRecordHelper();
        var grIdentitySystem = new GlideRecordSecure("x_aleen_snguardian_identity_system");
        grIdentitySystem.addQuery("identity", current.getUniqueValue());
		grIdentitySystem.addQuery("identifier_type","PRIMARY");
		grIdentitySystem.addQuery("system.code","!=",gs.getProperty('instance_name').toUpperCase());
		grIdentitySystem.addNotNullQuery('identifier');
        grIdentitySystem.query();
        while (grIdentitySystem.next()) {
			grIdentitySystem.setValue('datasource_table',current.datasource_table);
			grIdentitySystem.setValue('datasource',current.datasource);
            grIdentitySystem.setValue('provisioning_action', metaHelper.getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "UPDATE"));
            grIdentitySystem.setValue('provisioning_status', metaHelper.getRecordSysIdByCode('x_aleen_snguardian_provisioning_status','UPDATE-PENDING'));
			grIdentitySystem.update();
        }
    } catch (e) {
        logger.error("Identity System Updation BR error: " + e + " stack \n" + e.stack);
    }
})(current, previous);