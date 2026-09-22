import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['3b4cd8ef1b9c8a106962fe60cd4bcb3f'],
    name: 'Asset Type Transform Map',
    targetTable: 'x_aleen_snguardian_asset_type',
    sourceTable: 'x_aleen_snguardian_u_metadata_import_set',
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
        parent: {
            sourceField: '[Script]',
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
    if (source.u_parent != null && source.u_parent != "") {
        var assettypeGr = new GlideRecordSecure("x_aleen_snguardian_asset_type");
        if (assettypeGr.get("code", source.u_parent)) {
            return assettypeGr.getUniqueValue();
        }
    }
    return ""; 
})(source);`,
            useSourceScript: true,
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
    script: Now.include('./sys_transform_map_3b4cd8ef1b9c8a106962fe60cd4bcb3f.js'),
    $meta: {
        useEsLatest: true,
    },
})
