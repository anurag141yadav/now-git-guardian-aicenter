import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['03c6fa481bdfce10bf7ea82b234bcbec'],
    name: 'Identity Location Transform Map',
    targetTable: 'x_aleen_snguardian_identity_location',
    sourceTable: 'x_aleen_snguardian_u_import_set_user',
    active: true,
    fields: {
        location: {
            sourceField: 'u_location',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        identity: {
            sourceField: '[Script]',
            coalesce: true,
            choiceAction: 'ignore',
            sourceScript: `answer = (function transformEntry(source) {
    // Add your code here
    var identityGr = new GlideRecordSecure('x_aleen_snguardian_identity');
    identityGr.addQuery('user_name', source.u_user_name);
    identityGr.query();
	if(identityGr.next()){
		return identityGr.getUniqueValue();
	}
    // return the value to be put into the target field

})(source);`,
            useSourceScript: true,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: true,
    script: Now.include('./sys_transform_map_03c6fa481bdfce10bf7ea82b234bcbec.js'),
    $meta: {
        useEsLatest: true,
    },
})
