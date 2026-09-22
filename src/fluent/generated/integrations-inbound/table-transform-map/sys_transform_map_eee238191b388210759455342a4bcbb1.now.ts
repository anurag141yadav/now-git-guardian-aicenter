import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['eee238191b388210759455342a4bcbb1'],
    name: 'System Function  Metadata Table Transform Map',
    targetTable: 'x_aleen_snguardian_system_function_type',
    sourceTable: 'x_aleen_snguardian_u_metadata_import_set',
    active: true,
    fields: {
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
        name: {
            sourceField: 'u_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_eee238191b388210759455342a4bcbb1.js'),
    $meta: {
        useEsLatest: true,
    },
})
