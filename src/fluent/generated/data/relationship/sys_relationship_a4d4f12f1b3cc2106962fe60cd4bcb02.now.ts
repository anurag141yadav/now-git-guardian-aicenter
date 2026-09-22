import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a4d4f12f1b3cc2106962fe60cd4bcb02'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_system',
        basic_query_from: 'x_aleen_snguardian_identity_system',
        name: 'Orphan',
        query_with: `(function refineQuery(current, parent) {
	current.addQuery('system.code', parent.code);
    current.addQuery('identity.master_user_id', null);
	// Add your code here, such as current.addQuery(field, value);

})(current, parent);`,
        simple_reference: false,
        sys_name: 'Orphan',
    },
})
