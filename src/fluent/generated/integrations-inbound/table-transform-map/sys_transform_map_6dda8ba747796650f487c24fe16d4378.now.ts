import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['6dda8ba747796650f487c24fe16d4378'],
    name: 'Asset Transform Map NFC',
    targetTable: 'x_aleen_snguardian_asset',
    sourceTable: 'x_aleen_snguardian_u_asset_import_set',
    active: true,
    fields: {
        serial: {
            sourceField: 'u_serial',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        status: {
            sourceField: 'u_status',
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
        type: {
            sourceField: 'u_type',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
        },
        sub_type: {
            sourceField: 'u_subtype',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
            referenceValueField: 'code',
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
            referenceValueField: 'code',
        },
    },
    scripts: [
        {
            $id: Now.ID['31fa83e747796650f487c24fe16d43e5'],
            order: 200,
            when: 'onBefore',
            script: Now.include('./sys_transform_script_31fa83e747796650f487c24fe16d43e5.js'),
        },
    ],
    runScript: true,
    script: Now.include('./sys_transform_map_6dda8ba747796650f487c24fe16d4378.js'),
    $meta: {
        useEsLatest: true,
    },
})
