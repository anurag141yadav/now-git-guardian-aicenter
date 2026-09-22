import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['010235121b2c8250759455342a4bcbeb'],
    name: 'Identity Transform Map',
    targetTable: 'x_aleen_snguardian_identity',
    sourceTable: 'x_aleen_snguardian_u_import_set_user',
    active: true,
    runBusinessRules: true,
    enforceMandatoryFields: 'allFields',
    fields: {
        datasource: {
            sourceField: 'u_datasource',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {
	if(source.u_datasource != null && source.u_datasource != "") {
		return  source.u_datasource;
	}else{
		return source.sys_import_set.number;
		//return "sys_import_set";
	}
})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        source_system_code: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {
    if (source.u_source_system_code) {
       return source.u_source_system_code;
    } else {
        return gs.getProperty('instance_name').toUpperCase();
    }
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        type: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
    var typeValue = "";
    if (source.u_type != null && (source.u_type.toString().toLowerCase().includes("worker"))) {
        typeValue = "TEMPWORKER";
    } else if (source.u_type != null && (source.u_type.toString().toLowerCase().includes("visitor"))) {
        typeValue = "VISITOR";
    } else if (source.u_type != null && (source.u_type.toString().toLowerCase().includes("contractor"))) {
        typeValue = "CONTRACTOR";
    } else {
        typeValue = "EMPLOYEE";
    }
    grIdentityType = new GlideRecordSecure('x_aleen_snguardian_identitytype');
    grIdentityType.addQuery('code', typeValue);
    grIdentityType.query();
    if (grIdentityType.next()) {
        target.type = grIdentityType.getUniqueValue();
    }
})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        last_name: {
            sourceField: 'u_last_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        datasource_table: {
            sourceField: 'u_datasource_table',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    if (source.u_datasource_table != null && source.u_datasource_table != "") {
        return source.u_datasource_table;
    } else {
        return "sys_import_set";
    }

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        master_user_id: {
            sourceField: 'u_master_user_id',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        department: {
            sourceField: 'u_department',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        manager: {
            sourceField: 'u_manager',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        u_skip_propogation: {
            sourceField: 'u_skip_propogation',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        photo: {
            sourceField: 'u_photo',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {
    // var systemGr = new GlideRecordSecure('x_aleen_snguardian_system');
    // systemGr.addQuery('code', source.u_source_system_code);
    // systemGr.query();
    // if (systemGr.next()) {
    //     var systemUtil = new SystemUtil(systemGr.getValue('number'));
    //     var supportUserPhoto = systemUtil.getSystemFeature('SUPPORT-USER-PHOTO');
    //     if (supportUserPhoto.next()) {
    //         var featureValue = supportUserPhoto.getValue('value');
    //         if (featureValue.toLowerCase() == 'yes' || featureValue.toLowerCase() == 'true') {
    //             var imageUtil = new ImageUtils();
    //             if (source.u_photo && source.u_photo != '') {
    //                 var record = imageUtil.base64ToImage('x_aleen_snguardian_u_import_set_user', source.getUniqueValue(), source.u_first_name + '_image.jpg', source.u_photo, 'image/jpg');
    //                 gs.info('Transform Mapping 4 : ' + record);
    //                 return record ? record : "";
    //             }
    //         }
    //     }
    // }
	// gs.info("Target : "+gs.info(target));
})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        first_name: {
            sourceField: 'u_first_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        email: {
            sourceField: 'u_email',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        phone: {
            sourceField: 'u_phone',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        user_name: {
            sourceField: 'u_user_name',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        full_name: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {
    // if (source.u_full_name == null || (source.u_full_name != null && source.u_full_name != "")) 
	if(source.u_full_name){
        return source.u_full_name;
    } else {
        return source.u_first_name + " " + source.u_last_name;
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
        work_notes: {
            sourceField: 'u_work_notes',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    scripts: [
        {
            $id: Now.ID['cd44b22e47882a1051a3e84d416d4384'],
            order: 200,
            when: 'onBefore',
            script: Now.include('./sys_transform_script_cd44b22e47882a1051a3e84d416d4384.js'),
        },
        {
            $id: Now.ID['ce810ffd2bdd9a10d4dffd74ce91bf51'],
            when: 'onBefore',
            script: Now.include('./sys_transform_script_ce810ffd2bdd9a10d4dffd74ce91bf51.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_010235121b2c8250759455342a4bcbeb.js'),
})
