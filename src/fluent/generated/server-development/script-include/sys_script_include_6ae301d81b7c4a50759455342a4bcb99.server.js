var MetadataGlideRecordHelper = Class.create();
MetadataGlideRecordHelper.prototype = {
    initialize: function() {},
    getRecordSysIdByCode(tableName, code) {
        var grTableRecord = new GlideRecordSecure(tableName);
        grTableRecord.addQuery('code', code);
		grTableRecord.setLimit(1);
        grTableRecord.query();
        if (grTableRecord.next()) {
            return grTableRecord.getUniqueValue();
        }
        return null;
    },
    getRecordBySysId(tableName, sys_id) {
        var grTableRecord = new GlideRecordSecure(tableName);
        if (grTableRecord.get(sys_id)) {
            return grTableRecord;
        }
        return null;
    },
    getCodeRecordBySysId(tableName, sys_id) {
        var grTableRecord = new GlideRecordSecure(tableName);
        if (grTableRecord.get(sys_id)) {
            return grTableRecord.code;
        }
        return null;
    },
    getDecisionTableByCode(code) {
        var grTableRecord = new GlideRecordSecure("x_aleen_snguardian_rule_master_config");
        grTableRecord.addQuery('code', code);
		grTableRecord.setLimit(1);
        grTableRecord.query();
        if (grTableRecord.next()) {
            return grTableRecord.getValue('rule');
        }
        return null;
    },
    getRecordAsJSON(tableName, sys_id) {
        var grTableRecord = new GlideRecordSecure(tableName);
        if (grTableRecord.get(sys_id)) {
            var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
            return guardianGlideRecordUtil.toJSON(grTableRecord, null);
        }
        return null;
    },
	getRecordAsJSONWithSelectedAttributes(tableName, sys_id) {
        var grTableRecord = new GlideRecordSecure(tableName);
        if (grTableRecord.get(sys_id)) {
            var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
            return guardianGlideRecordUtil.toJSONWithSelectedAttributes(grTableRecord, null,['request','parent'],false);
        }
        return null;
    },
    getFilterRecordJSON(tableName, propName, propValue) {
        var grTableRecord = new GlideRecordSecure(tableName);
        grTableRecord.addQuery(propName, propValue);
		grTableRecord.addQuery('is_deleted', false);
		grTableRecord.setLimit(1);
        grTableRecord.query();
        if (grTableRecord.next()) {
            var guardianGlideRecordUtil = new GuardianGlideRecordUtil();
            return guardianGlideRecordUtil.toJSON(grTableRecord, null);
        }
        return null;
    },
	getGlideRecordByTable(tableName){
		var grTableRec = new GlideRecordSecure(tableName);
		return grTableRec;
	},
    type: 'MetadataGlideRecordHelper'
};