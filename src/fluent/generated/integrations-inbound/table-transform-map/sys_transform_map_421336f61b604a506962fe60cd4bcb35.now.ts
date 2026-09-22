import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['421336f61b604a506962fe60cd4bcb35'],
    name: 'Identity System Transform Map',
    targetTable: 'x_aleen_snguardian_identity_system',
    sourceTable: 'x_aleen_snguardian_u_import_set_user',
    order: 200,
    active: true,
    runBusinessRules: true,
    fields: {
        provisioning_status: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

    // if (action == "insert") {
        try {
            if (source.u_type != null && source.u_type.toString() != null && (source.u_type.toString().toLowerCase().includes("worker"))) {
                return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "SUCCESS");
            }
        } catch (ex) {
            gs.info("source.u_type :" + source.u_type + ": ==> " + ex.message);
        }
        return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_provisioning_status", "RECON-RECORD");
    // }
    // return null;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        provisioning_action: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// if(action == "insert"){
		return new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_request_entity_action", "NONE");
	// }
	// return null;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        valid_from: {
            sourceField: 'u_valid_from',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        valid_to: {
            sourceField: 'u_valid_to',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        identifier_type: {
            sourceField: 'u_identifier_type',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        identifier: {
            sourceField: '[Script]',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {
	if (source.u_identifier) {
		return source.u_identifier;
	} else {
		if (source.u_user_name != null && source.u_user_name != '') {
			var identityGr = new GlideRecordSecure('x_aleen_snguardian_identity');
			identityGr.addQuery('user_name', source.u_user_name);
			identityGr.query();
			if (identityGr.next()) {
				if (source.u_type != null && source.u_type.toString() != null && (source.u_type.toString().toLowerCase().includes("worker"))) {
					return identityGr.getUniqueValue();
				}
			}
		}
	}
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        status: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

    if (source.u_status == '1' || source.u_status == 'ACTIVE') {
        var grIdentityStatus = new GlideRecordSecure('x_aleen_snguardian_status_code');
        grIdentityStatus.addQuery('code', 'ACTIVE');
        grIdentityStatus.query();
        if (grIdentityStatus.next()) {
            return grIdentityStatus.getUniqueValue();
        }
    } else {
        var grIdentityStatusF = new GlideRecordSecure('x_aleen_snguardian_status_code');
        grIdentityStatusF.addQuery('code', 'INACTIVE');
        grIdentityStatusF.query();
        if (grIdentityStatusF.next()) {
            return grIdentityStatusF.getUniqueValue();
        }
    }

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        system: {
            sourceField: '[Script]',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
    if (source.u_source_system_code) {
       return source.u_source_system_code;
    } else {
        return gs.getProperty('instance_name').toUpperCase();
    }
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
    },
    scripts: [
        {
            $id: Now.ID['4b973e3e1b604a506962fe60cd4bcbde'],
            when: 'onComplete',
            script: Now.include('./sys_transform_script_4b973e3e1b604a506962fe60cd4bcbde.js'),
        },
        {
            $id: Now.ID['c4d9fa7e1b604a506962fe60cd4bcba2'],
            when: 'onReject',
            script: Now.include('./sys_transform_script_c4d9fa7e1b604a506962fe60cd4bcba2.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_421336f61b604a506962fe60cd4bcb35.js'),
    $meta: {
        useEsLatest: true,
    },
})
