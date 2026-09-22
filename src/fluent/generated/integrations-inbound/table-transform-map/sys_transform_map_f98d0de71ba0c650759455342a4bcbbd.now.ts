import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['f98d0de71ba0c650759455342a4bcbbd'],
    name: 'Access Levels Transform Map',
    targetTable: 'x_aleen_snguardian_access_level',
    sourceTable: 'x_aleen_snguardian_u_access_level_import_set',
    active: true,
    fields: {
        system: {
            sourceField: 'u_system',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
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
        criticality: {
            sourceField: 'u_criticality',
            choiceAction: 'ignore',
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
    scripts: [
        {
            $id: Now.ID['7c0b6a701b210a506962fe60cd4bcbe8'],
            script: Now.include('./sys_transform_script_7c0b6a701b210a506962fe60cd4bcbe8.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_f98d0de71ba0c650759455342a4bcbbd.js'),
    $meta: {
        useEsLatest: true,
    },
})
