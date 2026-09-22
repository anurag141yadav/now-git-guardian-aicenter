var DeletedRecordsUtil = Class.create();
DeletedRecordsUtil.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" DeletedRecordsUtil:: ");
	},
    processDeletedAssets: function(system_code, importset_id) {
        this.compareAndMarkasDeleted('x_aleen_snguardian_asset', 'code', 'system.number', system_code,
            'x_aleen_snguardian_u_asset_import_set', 'u_code', 'sys_import_set', importset_id);
    },
    processDeletedUsers: function(system_code, importset_id) {
        this.compareAndMarkasDeleted('x_aleen_snguardian_identity_system', 'identifier', 'system.number', system_code,
            'x_aleen_snguardian_u_import_set_user', 'u_identifier', 'sys_import_set', importset_id);
    },
    processDeletedIdentityAccess: function(system_code, importset_id) {
        this.compareAndMarkUserRecordsDeleted('x_aleen_snguardian_identity_access', 'identifier', 'access_level.system.number', system_code,
            'x_aleen_snguardian_u_identity_access_import_set', 'u_identifier', 'sys_import_set', importset_id);
    },
    processDeletedIdentityAssets: function(system_code, importset_id) {
        this.compareAndMarkUserRecordsDeleted('x_aleen_snguardian_identity_asset', 'identifier', 'asset.system.number', system_code,
            'x_aleen_snguardian_u_identity_asset_import_set', 'u_asset_id', 'sys_import_set', importset_id);
    },
    processDeletedAccessLevels: function(system_code, importset_id) {
        this.compareAndMarkasDeleted('x_aleen_snguardian_access_level', 'code', 'system.number', system_code,
            'x_aleen_snguardian_u_access_level_import_set', 'u_code', 'sys_import_set', importset_id);
    },
    compareAndMarkasDeleted: function(table1, table1Field, table1filter_column, table1filter_value,
        table2, table2Field, table2filter_column, table2filter_value) {
        var gr1 = new GlideRecordSecure(table1);
        gr1.addNotNullQuery(table1Field);
        gr1.addQuery(table1Field, '!=', '');
        gr1.addQuery('is_deleted', false);
        if (table1filter_column != null && table1filter_column != '') {
            gr1.addQuery(table1filter_column, table1filter_value);
        }
        gr1.query();
        while (gr1.next()) {
            var gr2 = new GlideRecordSecure(table2);
            gr2.addQuery(table2Field, gr1.getValue(table1Field));
            if (table2filter_column != null && table2filter_column != '') {
                gr2.addQuery(table2filter_column, table2filter_value);
            }
			gr2.setLimit(1);
            gr2.query();
            if (gr2.next()) {
                this.logger.debug('Record exists in both tables with value: ' + gr1.getValue(table1Field));
            } else {
                gr1.is_deleted = true;
                gr1.work_notes = "marked as deleted as part of deleted records processing";
                gr1.update();
            }
        }
    },
    compareAndMarkUserRecordsDeleted: function(table1, table1Field, table1filter_column, table1filter_value,
        table2, table2Field, table2filter_column, table2filter_value) {
        var gr1 = new GlideRecordSecure(table1);
        gr1.addNotNullQuery(table1Field);
        gr1.addQuery(table1Field, '!=', '');
        gr1.addQuery('is_deleted', false);
        if (table1filter_column != null && table1filter_column != '') {
            gr1.addQuery(table1filter_column, table1filter_value);
        }
        gr1.addNotNullQuery('identity');
        gr1.addQuery('identity', '!=', '');
        gr1.query();
        var identitySystemGr = new GlideRecordSecure('x_aleen_snguardian_identity_system');
        var systemUserId = '';
        while (gr1.next()) {
            identitySystemGr.initialize();
            identitySystemGr.addQuery('identity', gr1.getValue('identity'));
            if (table1filter_column != null && table1filter_column != '') {
                identitySystemGr.addQuery('system.number', table1filter_value);
            }
            identitySystemGr.addQuery('is_deleted', false);
            identitySystemGr.query();
            if (identitySystemGr.next()) {
                systemUserId = identitySystemGr.getValue('identifier');
            }
            var gr2 = new GlideRecordSecure(table2);
            gr2.addQuery(table2Field, gr1.getValue(table1Field));
            if (table2filter_column != null && table2filter_column != '') {
                gr2.addQuery(table2filter_column, table2filter_value);
            }
            if (systemUserId && systemUserId != '') {
                gr2.addQuery('u_user_id', systemUserId);
            }
			gr2.setLimit(1);
            gr2.query();
            if (gr2.next()) {
                this.logger.debug('Record exists in both tables with value: ' + gr1.getValue(table1Field));
            } else {
                gr1.is_deleted = true;
                gr1.work_notes = "marked as deleted as part of deleted records processing";
                gr1.update();
            }
        }
    },
    type: 'DeletedRecordsUtil'
};