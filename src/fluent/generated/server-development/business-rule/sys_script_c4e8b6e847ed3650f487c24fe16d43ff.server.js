(function executeRule(current, previous /*null when async*/ ) {
    if (current) {
		var grAssetType = new GlideRecordSecure("x_aleen_snguardian_asset_type");
		grAssetType.addQuery("code","MOBILE_CREDENTIAL");
		grAssetType.setLimit(1);
		grAssetType.query();
		if(grAssetType.next()){
			g_scratchpad.mc_type = grAssetType.getUniqueValue();
		}
        var grIdenLoc = new GlideRecordSecure("x_aleen_snguardian_identity_location");
        grIdenLoc.addQuery("identity", current.getValue("identity"));
		grIdenLoc.setLimit(1);
        grIdenLoc.query();
        if (grIdenLoc.next()) {
            var grLocAdmin = new GlideRecordSecure('x_aleen_snguardian_badge_office');
            grLocAdmin.addQuery('locations','CONTAINS', grIdenLoc.getValue('location'));
            grLocAdmin.orderBy('order');
			grLocAdmin.setLimit(1);
            grLocAdmin.query();
            if (grLocAdmin.next()) {
                if (grLocAdmin.getValue('mc_supported') == "1") {
					g_scratchpad.mc_supported = true;
					g_scratchpad.mc_subtype = grLocAdmin.getValue('mc_sub_type');
					g_scratchpad.mc_system = grLocAdmin.getValue('mc_nfc_system');
					g_scratchpad.mc_pac_system = grLocAdmin.getValue("system");
				}else{
					g_scratchpad.mc_supported = false;
				}
			}
		}	
    }

})(current, previous);