import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['ace7a24f1b944a106962fe60cd4bcbe8'],
    name: 'Identity Type Transform Map',
    targetTable: 'x_aleen_snguardian_identitytype',
    sourceTable: 'x_aleen_snguardian_u_metadata_import_set',
    order: 10,
    active: true,
    fields: {
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
        description: {
            sourceField: 'u_description',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_ace7a24f1b944a106962fe60cd4bcbe8.js'),
    $meta: {
        useEsLatest: true,
    },
})
