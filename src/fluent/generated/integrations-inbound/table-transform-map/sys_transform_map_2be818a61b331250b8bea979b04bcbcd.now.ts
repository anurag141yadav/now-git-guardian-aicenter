import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['2be818a61b331250b8bea979b04bcbcd'],
    name: 'Visitor Transform Map',
    targetTable: 'x_aleen_snguardian_visitor',
    sourceTable: 'x_aleen_snguardian_u_visitor_importset',
    active: true,
    enforceMandatoryFields: 'allFields',
    fields: {
        first_name: {
            sourceField: 'u_first_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        sys_id: {
            sourceField: 'u_visitor',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        document_number: {
            sourceField: 'u_document_number',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
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
        identity_validation_type: {
            sourceField: 'u_identity_validation_type',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        photo: {
            sourceField: 'u_photo',
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
            $id: Now.ID['b183a0a74714a210f487c24fe16d43f3'],
            when: 'onBefore',
            script: Now.include('./sys_transform_script_b183a0a74714a210f487c24fe16d43f3.js'),
        },
    ],
    runScript: false,
})
