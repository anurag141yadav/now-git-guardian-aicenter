(function execute(inputs, outputs) {
    var logger = new AlertGuardianLogger(" Alert Processing Provisioning Queue Action:: ");
try {
    var grQueue = new GlideRecordSecure('x_aleen_snguardian_provisioning_queue');
    grQueue.addQuery('is_processed', false);
    grQueue.orderBy('number');
    grQueue.setLimit(1);
    grQueue.query();
    if (grQueue.next()) {
        var system_function = grQueue.getValue('function');
        var options = JSON.parse(grQueue.getValue('options'));
        var data = JSON.parse(grQueue.getValue('data'));
        var system_number = data["asset.system.number"] || data["access_level.system.number"] || data["system.number"] || data["number"];
        var provisioningHelper = new ProvisioningHelper(system_number);
        options.monitor_sys_id = grQueue.getValue('provisioning_record');
        options.queue_sys_id = grQueue.getUniqueValue();
        if (options && options.table && options.id) {
            var grEntity = new GlideRecordSecure(options.table);
            if (grEntity.get(options.id)) {
                grEntity.setValue("provisioning_action", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", options.action));
                grEntity.setValue("provisioning_status", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "PENDING"));
                grEntity.update();
            } else {
                logger.debug("Prov Queue BR :: Error unable to find entity in table " + options.table + " with id " + options.id);
            }
        } else {
            provisioningHelper.execute(data, system_function, options);
        }

    } else {
        logger.debug("No Record found in queue");
    }

} catch (e) {
    logger.error("Error in Provisioning Queue Processing Exception :: " + e + " \nStack\n " + e.stack);
}


})(inputs, outputs);