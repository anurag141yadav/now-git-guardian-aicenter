var ProvisioningMonitorUtil = Class.create();
ProvisioningMonitorUtil.prototype = {
    initialize: function() {
        this.prov_monitor_table = "x_aleen_snguardian_provisioning_monitor";
        this.prov_queue_table = "x_aleen_snguardian_provisioning_queue";
        this.categoryThresholdObj = {
            "PROVISIONING": 50,
            "RECON": 60,
            "DATA": 20,
            "OTHERS": 10,
            "PRIORITY": 1
        };
        this.logger = new AlertGuardianLogger(" ProvisioningMonitorUtil:: ");
    },
    create: function(system_sys_id, function_sys_id, category, data) {
        var grProvMonitor = new GlideRecordSecure(this.prov_monitor_table);
        grProvMonitor.system = system_sys_id;
        grProvMonitor.function = function_sys_id;
        grProvMonitor.status = "PENDING";
        grProvMonitor.category = category;
        grProvMonitor.datasource_table = data["datasource_table"];
        grProvMonitor.datasource = data["datasource.sys_id"];
        if (data["identity.sys_id"] && "" != data["identity.sys_id"]) {
            grProvMonitor.identity = data["identity.sys_id"];
        }
        return grProvMonitor.insert();
    },
    createQueue: function(system_sys_id, function_sys_id, category, function_name, data, options) {
        var grProvMonitor = new GlideRecordSecure(this.prov_monitor_table);
        grProvMonitor.system = system_sys_id;
        grProvMonitor.function = function_sys_id;
        grProvMonitor.status = "IN_QUEUE";
        grProvMonitor.category = category;
        grProvMonitor.datasource_table = data["datasource_table"];
        grProvMonitor.datasource = data["datasource.sys_id"];
        if (data["identity.sys_id"] && "" != data["identity.sys_id"]) {
            grProvMonitor.identity = data["identity.sys_id"];
        }
        var prov_monitor_sys_id = grProvMonitor.insert();

        var grProvQueue = new GlideRecordSecure(this.prov_queue_table);
        grProvQueue.is_processed = false;
        grProvQueue.function = function_name;
        grProvQueue.data = JSON.stringify(data);
        grProvQueue.options = JSON.stringify(options);
        grProvQueue.system = system_sys_id;
		grProvQueue.record_id = options["id"];
        grProvQueue.provisioning_record = prov_monitor_sys_id;
        grProvQueue.insert();
        return prov_monitor_sys_id;
    },
    update: function(monitor_sys_id, queue_sys_id) {
        var grProvMonitorToUpdate = new GlideRecordSecure(this.prov_monitor_table);
        if (monitor_sys_id && grProvMonitorToUpdate.get(monitor_sys_id)) {
            grProvMonitorToUpdate.status = "PENDING";
            grProvMonitorToUpdate.work_notes = "From Queue to Pending";
            grProvMonitorToUpdate.update();
        }
        var grProvQueue = new GlideRecordSecure(this.prov_queue_table);
        if (queue_sys_id && grProvQueue.get(queue_sys_id)) {
            grProvQueue.is_processed = true;
            grProvQueue.update();
        }
    },
    updateStartTime: function(sys_id) {
        var grProvMonitorToUpdate = new GlideRecordSecure(this.prov_monitor_table);
        if (sys_id && grProvMonitorToUpdate.get(sys_id)) {
            grProvMonitorToUpdate.start_time = new GlideDateTime();
            grProvMonitorToUpdate.status = "IN_PROGRESS";
            grProvMonitorToUpdate.work_notes = "Triggering API";
            grProvMonitorToUpdate.update();
        }
    },
    updateSuccess: function(sys_id, notes) {
        var grProvMonitorSuccessUpdate = new GlideRecordSecure(this.prov_monitor_table);
        if(sys_id && grProvMonitorSuccessUpdate.get(sys_id)){
            grProvMonitorSuccessUpdate.end_time = new GlideDateTime();
            grProvMonitorSuccessUpdate.status = "PROCESSED";
            grProvMonitorSuccessUpdate.notes = notes;
            grProvMonitorSuccessUpdate.work_notes = "Successfully Completed";
            grProvMonitorSuccessUpdate.update();
        }
    },
    updateFail: function(sys_id, notes) {
        var grProvMonitorFailUpdate = new GlideRecordSecure(this.prov_monitor_table);
        if (sys_id && grProvMonitorFailUpdate.get(sys_id)){
            grProvMonitorFailUpdate.end_time = new GlideDateTime();
            grProvMonitorFailUpdate.status = "FAILED";
            grProvMonitorFailUpdate.notes = notes;
            grProvMonitorFailUpdate.work_notes = "Error While Processing Request";
            grProvMonitorFailUpdate.update();
        }
    },
    checkThreshold: function(system, rate, category, isPriority) {
        try {
            if (!category) {
                category = "PROVISIONING";
            }
            if (!rate || rate == 0) { // If rate null empty or 0 limit is not exceeded
                this.logger.debug("checkThreshold :: User has not configure the rate limit : limit not exceeded : Rate : " + rate);
                return false;
            }
            var count = 0;
            count = this.getTotalProvMonRecords(system);
            this.logger.debug("checkThreshold :: Count " + count + " vs rate " + rate);
            if (isPriority) {
                category = "PRIORITY";
            }
            if (parseInt(count) <= parseInt(rate) && this.calculateThresholdLimits(count, rate, category)) {
                this.logger.debug("checkThreshold :: Limit is not Exceeded");
                return false;
            }
            this.logger.debug("Limit is exceeded");
            return true;
        } catch (e) {
			this.logger.error("checkThreshold Exception :: " + e + " \nStack\n " + e.stack);
            return true;
        }

    },
    getTotalProvMonRecords: function(system) {
        var gaTotalRecords = new GlideAggregate(this.prov_monitor_table);
        gaTotalRecords.addQuery('status', 'IN_PROGRESS');
        gaTotalRecords.addQuery('system', system);
        gaTotalRecords.addAggregate('COUNT');
        gaTotalRecords.query();
        var totalCount = 0;
        if (gaTotalRecords.next()) {
            return gaTotalRecords.getAggregate('COUNT');
        }
        this.logger.debug("getTotalProvMonRecords :: Unable to get Inprogress records for system : "+system);
    },
    calculateThresholdLimits: function(inprogress, rate, category) {
        var freePercentage = (((rate - inprogress) / rate) * 100).toFixed(0);
        return parseInt(freePercentage) >= parseInt(this.categoryThresholdObj[category]);
    },
    addWorknotes: function(sys_id, work_notes) {
        var grProvMonitor = new GlideRecordSecure(this.prov_monitor_table);
        if (grProvMonitor.get(sys_id)) {
            grProvMonitor.work_notes = work_notes;
            grProvMonitor.update();
        }
    },
    type: 'ProvisioningMonitorUtil'
};