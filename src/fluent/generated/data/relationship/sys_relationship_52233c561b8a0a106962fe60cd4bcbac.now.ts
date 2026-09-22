import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['52233c561b8a0a106962fe60cd4bcbac'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_access_level',
        basic_query_from: 'x_aleen_snguardian_access_requisite',
        name: 'Prerequisites',
        query_with: "current.addQuery('access_level', parent.sys_id);",
        reference_field: 'access_level',
        simple_reference: true,
        sys_name: 'Prerequisites',
    },
})
