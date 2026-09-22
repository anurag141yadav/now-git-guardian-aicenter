var AssetImportUtil = Class.create();
AssetImportUtil.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" AssetImportUtil:: ");
	},
    createImportSet: function() {
        var grImpSet = new GlideRecord('sys_import_set');
        grImpSet.initialize();
        grImpSet.table_name = "x_aleen_snguardian_u_asset_import_set";
        grImpSet.short_description = "Import Set created in AssetImportUtil";
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
            this.logger.debug('transformImportSet : executing the transform on  Asset  Import Set  -- ' + grImpSet.number);
        }
    },
    type: 'AssetImportUtil'
};