import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['a2a7b19d1b3c8210759455342a4bcb97'],
    name: 'System Function Table Transform Map',
    targetTable: 'x_aleen_snguardian_system_function',
    sourceTable: 'x_aleen_snguardian_u_system_config_importset',
    order: 60,
    active: true,
    fields: {
        payload_handler: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    var payload_handler = source.u_payload_handler;
    var cleaned_payload_handler = payload_handler.replace(/^\\s*[\\r\\n]/gm, '').trim();
    return cleaned_payload_handler;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        success_response_handler: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    var scriptString = source.u_success_response_handler;
    var cleaned_script = scriptString.replace(/^\\s*[\\r\\n]/gm, '').trim();
    return cleaned_script;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        payload: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    var scriptString = source.u_payload;
    var cleaned_script = scriptString.replace(/^\\s*[\\r\\n]/gm, '').trim();
    return cleaned_script;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        function: {
            sourceField: 'u_function',
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
        url: {
            sourceField: 'u_url',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        category: {
            sourceField: 'u_category',
            choiceAction: 'ignore',
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
        error_response_handler: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    var scriptString = source.u_error_response_handler;
    var cleaned_script = scriptString.replace(/^\\s*[\\r\\n]/gm, '').trim();
    return cleaned_script;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        pre_validation_script: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    var scriptString = source.u_pre_validation_script;
    var cleaned_script = scriptString.replace(/^\\s*[\\r\\n]/gm, '').trim();
    return cleaned_script;

})(source);`,
            useSourceScript: true,
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
    script: Now.include('./sys_transform_map_a2a7b19d1b3c8210759455342a4bcb97.js'),
    $meta: {
        useEsLatest: true,
    },
})
