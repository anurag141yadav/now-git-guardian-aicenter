var VariableSetHelper = Class.create();
VariableSetHelper.prototype = {
initialize: function(recordProducerId) {
	this.recordProducerId = recordProducerId;
},
getVariableSetsForRecordProducer: function() {
		var result = [];
	if (!this.recordProducerId) {
		return result;
	}
	
	try {
		var grRecordProdVarSet = new GlideRecord('io_set_item');
		grRecordProdVarSet.addQuery('applies_to', this.recordProducerId); 
		grRecordProdVarSet.query();
		while (grRecordProdVarSet.next()) {
			var vsDetails = {
				variable_set_name: grRecordProdVarSet.getValue('name'),
				variable_set_sys_id: grRecordProdVarSet.getValue('sys_id'),
				order: grRecordProdVarSet.getValue('order'),
			};
			result.push(vsDetails);
		}
	} catch (e) {
		this.logger.error("getVariableSetsForRecordProducer Exception :: " + e + " \nStack\n " + e.stack);
		return result;
	}
	return result;
},

type: 'VariableSetHelper'
};