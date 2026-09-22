import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['28845be01bf54290759455342a4bcb98'],
    name: 'Identity Access Transform Map',
    targetTable: 'x_aleen_snguardian_identity_access',
    sourceTable: 'x_aleen_snguardian_u_identity_access_import_set',
    active: true,
    copyEmptyFields: true,
    fields: {
        identifier: {
            sourceField: 'u_identifier',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {
	// if(source.u_status=='3'){
	// 	return gs.generateGUID().toString();
	// }
	return source.u_access_id;
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
        identity: {
            sourceField: '[Script]',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	var identityGr = new GlideRecordSecure('x_aleen_snguardian_identity_system');
			identityGr.addQuery('identifier', source.u_user_id);
			identityGr.query();
			while(identityGr.next()){
				return identityGr.getValue("identity");
			}

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        access_level: {
            sourceField: 'u_access_id',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
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
        provisioning_status: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
    if (source.u_status == 'ACTIVE') {
		return "SUCCESS";
	}else if(source.u_status == 'INACTIVE'){
		return "UPDATE-SUCCESS";
	}else if(source.u_status == 'DELETE'){
		return "DEPROV-SUCCESS";
	}
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        is_deleted: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	if(source.u_status=="ACTIVE"){
		return false;
	}
	return true;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        associated_asset: {
            sourceField: 'u_asset_id',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        status: {
            sourceField: 'u_status',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	if (source.u_status == 'ACTIVE') {
		return "SUCCESS";
	}else if(source.u_status == 'INACTIVE'){
		return "UPDATE-SUCCESS";
	}else if(source.u_status == 'DELETE'){
		return "DEPROV-SUCCESS";
	}

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_28845be01bf54290759455342a4bcb98.js'),
    $meta: {
        useEsLatest: true,
    },
})
