import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ded2e9fb1b4b8e10bf7ea82b234bcb14'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_request',
        basic_query_from: 'x_aleen_snguardian_request',
        name: 'Child Requests',
        query_with: "current.addQuery('parent', parent.sys_id);",
        reference_field: 'parent',
        simple_reference: true,
        sys_name: 'Child Requests',
    },
})
