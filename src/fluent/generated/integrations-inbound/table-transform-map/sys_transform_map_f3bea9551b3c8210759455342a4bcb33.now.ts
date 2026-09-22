import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['f3bea9551b3c8210759455342a4bcb33'],
    name: 'System Field Mapping  Table Transform Map',
    targetTable: 'x_aleen_snguardian_system_field_mapping',
    sourceTable: 'x_aleen_snguardian_u_system_config_importset',
    order: 40,
    active: true,
    fields: {
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
        target: {
            sourceField: 'u_target',
            coalesce: true,
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        default_value: {
            sourceField: 'u_default_value',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        script: {
            sourceField: '[Script]',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

    var field_mapping_script = source.u_script;
    var cleaned_field_mapping_script = field_mapping_script.replace(/^\\s*[\\r\\n]/gm, '').trim();
    return cleaned_field_mapping_script;

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        datatype: {
            sourceField: 'u_datatype',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        source: {
            sourceField: 'u_source',
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
    },
    runScript: true,
    script: Now.include('./sys_transform_map_f3bea9551b3c8210759455342a4bcb33.js'),
    $meta: {
        useEsLatest: true,
    },
})
