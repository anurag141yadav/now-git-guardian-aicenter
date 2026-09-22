import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['325efd8c1ba44e106962fe60cd4bcb4a'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_identity',
        basic_query_from: 'x_aleen_snguardian_identity_asset',
        name: 'Assets',
        query_with: "current.addQuery('identity', parent.sys_id);",
        reference_field: 'identity',
        simple_reference: true,
        sys_name: 'Assets',
    },
})
