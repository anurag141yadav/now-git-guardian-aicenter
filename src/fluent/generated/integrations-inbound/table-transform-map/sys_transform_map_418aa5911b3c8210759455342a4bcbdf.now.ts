import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['418aa5911b3c8210759455342a4bcbdf'],
    name: 'System Feature  Table Transform Map',
    targetTable: 'x_aleen_snguardian_system_features',
    sourceTable: 'x_aleen_snguardian_u_system_config_importset',
    order: 30,
    active: true,
    fields: {
        feature: {
            sourceField: 'u_feature',
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
        value: {
            sourceField: 'u_value',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_418aa5911b3c8210759455342a4bcbdf.js'),
    $meta: {
        useEsLatest: true,
    },
})
