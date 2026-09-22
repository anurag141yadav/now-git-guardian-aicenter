import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3afe35cc1ba44e106962fe60cd4bcb3c'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_identity',
        basic_query_from: 'x_aleen_snguardian_identity_system',
        name: 'Systems',
        query_with: `current.addQuery('identity', parent.sys_id);
current.addQuery('identifier_type', 'PRIMARY');
current.addEncodedQuery('ORDERBYsystem');
current.addQuery('is_deleted',false);
//current.addActiveQuery('ORDERBYsystem^GROUPBYsystem');
//current.groupBy('system');
//current.query();`,
        reference_field: 'identity',
        simple_reference: false,
        sys_name: 'Systems',
    },
})
