import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['6dfba9d11b3c8210759455342a4bcb80'],
    name: 'System Parameter Table Transform Map',
    targetTable: 'x_aleen_snguardian_system_parameters',
    sourceTable: 'x_aleen_snguardian_u_system_config_importset',
    order: 20,
    active: true,
    fields: {
        property_name: {
            sourceField: 'u_property_name',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        property_value: {
            sourceField: 'u_property_value',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        type: {
            sourceField: 'u_type',
            coalesce: true,
            choiceAction: 'ignore',
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
    },
    runScript: true,
    script: Now.include('./sys_transform_map_6dfba9d11b3c8210759455342a4bcb80.js'),
    $meta: {
        useEsLatest: true,
    },
})
