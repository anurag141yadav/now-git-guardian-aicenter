var AccessImportUtil = Class.create();
AccessImportUtil.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" AccessImportUtil:: ");
	},
    createImportSet: function() {
        var grImpSet = new GlideRecord('sys_import_set');
        grImpSet.initialize();
        grImpSet.table_name = "x_aleen_snguardian_u_access_level_import_set";
        grImpSet.short_description = "Import Set created in AccessImportUtil";
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
            this.logger.debug('transformImportSet : Executing transform on Access Import Set  -- ' + grImpSet.number);
        }
    },
    type: 'AccessImportUtil'
};