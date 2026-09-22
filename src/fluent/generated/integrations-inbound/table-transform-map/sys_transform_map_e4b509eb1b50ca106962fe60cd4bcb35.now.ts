import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['e4b509eb1b50ca106962fe60cd4bcb35'],
    name: 'Field Mapping Transform Map',
    targetTable: 'x_aleen_snguardian_field_mapping_type',
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
        description: {
            sourceField: 'u_description',
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
        category: {
            sourceField: 'u_parent',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_e4b509eb1b50ca106962fe60cd4bcb35.js'),
    $meta: {
        useEsLatest: true,
    },
})
