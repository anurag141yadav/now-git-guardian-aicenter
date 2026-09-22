import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['03f592f41b6dc250759455342a4bcbd2'],
    name: 'Identity Asset Transform Map',
    targetTable: 'x_aleen_snguardian_identity_asset',
    sourceTable: 'x_aleen_snguardian_u_identity_asset_import_set',
    order: 200,
    active: true,
    fields: {
        status: {
            sourceField: 'u_asset_status',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
	// asset status 0 = active 1 = inactive 3 = deleted
    if (source.u_asset_status == '0') {//using 0 as active here
        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ACTIVE");
    }else if(source.u_asset_status == '1' || source.u_asset_status == '3'){
        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "INACTIVE");
    }
})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        is_deleted: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

    if (source.u_is_deleted == 'true' || source.u_is_deleted == true) {
        return true;
    }
    return false;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        asset: {
            sourceField: 'u_card_number',
            coalesce: true,
            choiceAction: 'reject',
            sourceScript: `answer = (function transformEntry(source) {
	if (source.u_asset_id != null && source.u_asset_id != "") {
		var assetGr = new GlideRecordSecure("x_aleen_snguardian_asset");
		assetGr.addQuery("code", source.u_asset_id);
		assetGr.query();
		while (assetGr.next()) {
			if (source.u_asset_status != "" && source.u_asset_status == "3") {
				assetGr.setValue("status", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "UNASSIGNED"));
				assetGr.update();
			} else {
				assetGr.setValue("status", new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "ASSIGNED"));
				assetGr.update();
			}
			return assetGr.getUniqueValue();
		}
	}

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'serial',
        },
        identity: {
            sourceField: '[Script]',
            coalesce: true,
            choiceAction: 'reject',
            sourceScript: `answer = (function transformEntry(source) {
	if (source.u_user_id != "" || source.u_user_id != null) {
		var identityGr = new GlideRecordSecure("x_aleen_snguardian_identity_system");
		identityGr.addQuery("identifier",source.u_user_id);
		identityGr.query();
		while(identityGr.next()){
			return identityGr.identity;
		}
	}else{
		ignore = true;
	}
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        provisioning_action: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	return "NONE";

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        provisioning_status: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

    if (source.u_asset_status == 'ACTIVE') {
		return "SUCCESS";
	}else if(source.u_asset_status == 'INACTIVE'){
		return "UPDATE-SUCCESS";
	}else if(source.u_asset_status == 'DELETE'){
		return "DEPROV-SUCCESS";
	}

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        valid_from: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
	if(source.u_valid_from){
		return new GlideDateTime(source.u_valid_from);
	}else{
		return null;
	}
	
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        identifier: {
            sourceField: 'u_asset_id',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
		if (source.u_asset_id != "" && source.u_asset_id != null && source.u_user_id != "" && source.u_user_id != null) {
			//var unique_id = source.u_user_id + "." + source.u_asset_id;
			return source.u_asset_id;
		}
})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        issue_type: {
            sourceField: 'u_issue_type',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        valid_to: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
	if(source.u_valid_to){
		return new GlideDateTime(source.u_valid_to);
	}else{
		return null;
	}
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    scripts: [
        {
            $id: Now.ID['85c4895d2bd11a10d4dffd74ce91bf77'],
            when: 'onBefore',
            script: Now.include('./sys_transform_script_85c4895d2bd11a10d4dffd74ce91bf77.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_03f592f41b6dc250759455342a4bcbd2.js'),
    $meta: {
        useEsLatest: true,
    },
})
