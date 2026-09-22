import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['d5ec68111b388210759455342a4bcb13'],
    name: 'Request Entity Action Transform Map',
    targetTable: 'x_aleen_snguardian_request_entity_action',
    sourceTable: 'x_aleen_snguardian_u_metadata_import_set',
    active: true,
    fields: {
        applicable_to: {
            sourceField: 'u_applicable_to',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        name: {
            sourceField: 'u_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        code: {
            sourceField: 'u_code',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_d5ec68111b388210759455342a4bcb13.js'),
    $meta: {
        useEsLatest: true,
    },
})
