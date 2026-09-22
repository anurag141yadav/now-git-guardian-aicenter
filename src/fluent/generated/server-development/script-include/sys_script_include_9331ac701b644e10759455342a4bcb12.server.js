var SystemUtil = Class.create();
SystemUtil.prototype = {
    initialize: function(number) {
        this.number = number;
    },
    getSystem: function() {
        var grSystem = new GlideRecordSecure("x_aleen_snguardian_system");
        grSystem.addQuery('number', this.number);
		grSystem.setLimit(1);
        grSystem.query();
        if (grSystem.next()) {
            return grSystem;
        }
        return null;
    },
    getSystemByCode: function(code) {
        var grSystem = new GlideRecordSecure("x_aleen_snguardian_system");
        grSystem.addQuery('code', code);
		grSystem.setLimit(1);
        grSystem.query();
        if (grSystem.next()) {
            return grSystem;
        }
        return null;
    },
    getSysProvStatus: function(code) {
        var grSystemProvStatus = new GlideRecordSecure("x_aleen_snguardian_provisioning_status");
        grSystemProvStatus.addQuery('code', code);
		grSystemProvStatus.setLimit(1);
        grSystemProvStatus.query();
        if (grSystemProvStatus.next()) {
            return grSystemProvStatus;
        }
        return null;
    },
    getAllReconFieldMappings: function() {
        var grSystemFieldMapsRecon = new GlideRecordSecure("x_aleen_snguardian_system_field_mapping");
        grSystemFieldMapsRecon.addQuery('type.category', 'RECON');
        grSystemFieldMapsRecon.addQuery('system.number', this.number);
        grSystemFieldMapsRecon.query();
        return grSystemFieldMapsRecon;
    },
    getAllProvisionFieldMappings: function() {
        var grSystemFieldMapsProv = new GlideRecordSecure("x_aleen_snguardian_system_field_mapping");
        grSystemFieldMapsProv.addQuery('type.category', 'PROVISION');
        grSystemFieldMapsProv.addQuery('system.number', this.number);
        grSystemFieldMapsProv.query();
        return grSystemFieldMapsProv;
    },
    getFieldMappings: function(type) {
        var grSystemFieldMaps = new GlideRecordSecure("x_aleen_snguardian_system_field_mapping");
        grSystemFieldMaps.addQuery('system.number', this.number);
        grSystemFieldMaps.addQuery('type.code', type);
        grSystemFieldMaps.query();
        return grSystemFieldMaps;
    },
    getParameters: function(type) {
        var headerkeyValueArray = {};
        var grSystemParams = new GlideRecordSecure("x_aleen_snguardian_system_parameters");
        grSystemParams.addQuery('system.number', this.number);
        grSystemParams.addQuery('type', type);
        grSystemParams.query();
        while (grSystemParams.next()) {
            key = grSystemParams.getValue('property_name');
            value = grSystemParams.getValue('property_value');
            headerkeyValueArray[key] = value;
        }
        return headerkeyValueArray;
    },
    getFunction: function(type) {
        var grSystemFunction = new GlideRecordSecure("x_aleen_snguardian_system_function");
        grSystemFunction.addQuery('system.number', this.number);
        grSystemFunction.addQuery('function.code', type);
        grSystemFunction.query();
        return grSystemFunction;
    },
    getIDMatchingRules: function(scope) {
        var grSystemIdMatching = new GlideRecordSecure("x_aleen_snguardian_system_id_matching_rule");
        grSystemIdMatching.addQuery('system.number', this.number);
        if (scope !== null && scope !== "") {
            grSystemIdMatching.addQuery('scope.code', scope);
        }
        grSystemIdMatching.query();
        return grSystemIdMatching;
    },
    getSystemFeature: function(feature_code) {
        var grSystemFeature = new GlideRecordSecure("x_aleen_snguardian_system_features");
        grSystemFeature.addQuery('system.number', this.number);
        grSystemFeature.addQuery('feature.code', feature_code);
		grSystemFeature.addQuery('is_deleted', false);
        grSystemFeature.query();
        return grSystemFeature;
    },
    type: 'SystemUtil'
};