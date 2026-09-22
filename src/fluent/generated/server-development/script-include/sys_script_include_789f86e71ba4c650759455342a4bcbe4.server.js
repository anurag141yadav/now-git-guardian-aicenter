var UserImportUtil = Class.create();
UserImportUtil.prototype = {
    initialize: function() {
		this.logger = new AlertGuardianLogger(" UserImportUtil:: ");
	},
    createImportSet: function() {
		try{
			var grImpSet = new GlideRecord('sys_import_set');
			grImpSet.initialize();
			grImpSet.table_name = "x_aleen_snguardian_u_import_set_user";
			grImpSet.short_description = "Import Set created in UserImportUtil";
			var sysId = grImpSet.insert();
			if(!sysId){
				throw new Error("Error in creating User Import Set");
			}
			return grImpSet;
		}catch(e){
			this.logger.error("createImportSet Exception :: " + e + " \nStack\n " + e.stack);
			return null;
		}
    },
    transformImportSet: function(grImpSet) {
        grImpSet.state = "loaded";
        grImpSet.load_completed = new GlideDateTime();
        grImpSet.update();
		try{
			var transformer = new GlideImportSetTransformer();
			transformer.transformAllMaps(grImpSet);
			if (transformer.isError()) {
				throw new Error("Error executing the transform on  User Import Set");
			} else {
				this.logger.debug("transformImportSet :: User Import Set Processed Successfully", grImpSet.number);
			}
		}catch(e){
			this.logger.error("transformImportSet Exception :: " + e + " \nStack\n " + e.stack);
		}
    },

	createVisitorImportSet: function() {
        var grImpSet = new GlideRecord('sys_import_set');
        grImpSet.initialize();
        grImpSet.table_name = "x_aleen_snguardian_u_visitor_importset";
        grImpSet.short_description = "VIsior Import Set created in UserImportUtil";
        grImpSet.insert();
        return grImpSet;
    },
	transformVisitorImportSet: function(grImpSet) {
        grImpSet.state = "loaded";
        grImpSet.load_completed = new GlideDateTime();
        grImpSet.update();
        var transformer = new GlideImportSetTransformer();
        transformer.transformAllMaps(grImpSet);
        if (transformer.isError()) {
            this.logger.debug('transformVisitorImportSet : executing the transform on Visitor Import Set  -- ' + grImpSet.number);
        } else {
            this.logger.debug('transformVisitorImportSet : Visitor Import Set  -- ' + grImpSet.number + '  Processed Successfully');
        }
    },
    type: 'UserImportUtil'
};