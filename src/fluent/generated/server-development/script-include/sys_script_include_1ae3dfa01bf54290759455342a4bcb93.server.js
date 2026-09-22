var IdentityAccessImportUtil = Class.create();
IdentityAccessImportUtil.prototype = {
	initialize: function() {
		this.logger = new AlertGuardianLogger(" IdentityAccessImportUtil:: ");
	},
    createImportSet: function() {
        var grImpSet = new GlideRecord('sys_import_set');
        grImpSet.initialize();
        grImpSet.table_name = "x_aleen_snguardian_u_identity_access_import_set";
        grImpSet.short_description = "Import Set created in IdentityAccessImportUtil";
        grImpSet.insert();
        return grImpSet;
    },
    transformImportSet: function(grImpSet) {
        grImpSet.state = "loaded";
        grImpSet.load_completed = new GlideDateTime();
        grImpSet.update();
        var transformer = new GlideImportSetTransformer();
        transformer.transformAllMaps(grImpSet);
        if (transformer.isError()) {
           this.logger.debug('transformImportSet : executing the transform on Identity Access Import Set  -- ' + grImpSet.number);
        } else {
            this.logger.debug('transformImportSet : Identity Access Import Set  -- ' + grImpSet.number + '  Processed Successfully');
        }
    },
    type: 'IdentityAccessImportUtil'
};