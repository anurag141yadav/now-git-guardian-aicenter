(function executeRule(current, previous /*null when async*/ ) {
    try {
		var logger = new AlertGuardianLogger("BR On Change Prov Monitor Record Status :: ");
        var provisioningHelper = new ProvisioningHelper(current.system.number);
        var system_function = "";
        var grQueue = new GlideRecordSecure('x_aleen_snguardian_provisioning_queue');
        grQueue.addQuery('is_processed', false);
        grQueue.addQuery('system', current.system);
        grQueue.orderBy('number');
        grQueue.setLimit(1);
        grQueue.query();
        if (grQueue.next()) {
            system_function = grQueue.getValue('function');
            var options = JSON.parse(grQueue.getValue('options'));
            var data = JSON.parse(grQueue.getValue('data'));
            options.monitor_sys_id = grQueue.getValue('provisioning_record');
            options.queue_sys_id = grQueue.getUniqueValue();
            if (options && options.table && options.id) {
                var grEntity = new GlideRecordSecure(options.table);
                if (grEntity.get(options.id)){
					//TODO 80% of threshold limit, min 10 connections are free
                    grEntity.setValue("provisioning_action", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", options.action));
                    grEntity.setValue("provisioning_status", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "PENDING"));
                    grEntity.update();
                } else {
                    logger.error("Prov Queue BR :: Error unable to find entity in table " + options.table + " with id " + options.id);
                }
            } else {
                provisioningHelper.execute(data, system_function, options);
            }

        } else {
            logger.debug("No Record found in queue");
        }

    } catch (e) {
        logger.info("Exception in Provisioning Queue Processing " + e+" \n stack \n "+e.stack);
    }

})(current, previous);