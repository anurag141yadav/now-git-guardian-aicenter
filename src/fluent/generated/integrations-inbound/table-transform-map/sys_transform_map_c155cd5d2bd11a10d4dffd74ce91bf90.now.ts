import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['c155cd5d2bd11a10d4dffd74ce91bf90'],
    name: 'Identity Asset Transform NFC Map',
    targetTable: 'x_aleen_snguardian_identity_asset',
    sourceTable: 'x_aleen_snguardian_u_identity_asset_import_set',
    active: true,
    runBusinessRules: true,
    fields: {
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
        issue_type: {
            sourceField: 'u_issue_type',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        status: {
            sourceField: 'u_asset_status',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
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
        identifier: {
            sourceField: 'u_asset_id',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
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
        asset: {
            sourceField: 'u_card_number',
            coalesce: true,
            choiceAction: 'reject',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_c155cd5d2bd11a10d4dffd74ce91bf90.js'),
    $meta: {
        useEsLatest: true,
    },
})
