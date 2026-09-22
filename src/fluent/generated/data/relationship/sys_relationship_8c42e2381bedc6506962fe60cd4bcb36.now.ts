import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8c42e2381bedc6506962fe60cd4bcb36'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_access_level',
        basic_query_from: 'x_aleen_snguardian_access_owner',
        name: 'Access Owners',
        query_with: "current.addQuery('access_level', parent.sys_id);",
        reference_field: 'access_level',
        simple_reference: true,
        sys_name: 'Access Owners',
    },
})
