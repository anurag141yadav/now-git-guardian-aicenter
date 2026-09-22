import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['a663f1d91b3c8210759455342a4bcb7e'],
    name: 'System ID Matching Table Transform Map',
    targetTable: 'x_aleen_snguardian_system_id_matching_rule',
    sourceTable: 'x_aleen_snguardian_u_system_config_importset',
    order: 50,
    active: true,
    fields: {
        system_attribute: {
            sourceField: 'u_system_attribute',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        scope: {
            sourceField: 'u_scope',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        sequence: {
            sourceField: 'u_sequence',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        system: {
            sourceField: 'u_system',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        script: {
            sourceField: 'u_script',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        attribute: {
            sourceField: 'u_attribute',
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
    script: Now.include('./sys_transform_map_a663f1d91b3c8210759455342a4bcb7e.js'),
    $meta: {
        useEsLatest: true,
    },
})
