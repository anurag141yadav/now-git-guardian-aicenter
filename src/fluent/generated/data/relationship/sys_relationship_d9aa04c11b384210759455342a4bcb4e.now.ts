import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d9aa04c11b384210759455342a4bcb4e'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_identity',
        basic_query_from: 'x_aleen_snguardian_request',
        name: 'Request',
        query_with: "current.addQuery('request_for', parent.sys_id);",
        reference_field: 'request_for',
        simple_reference: true,
        sys_name: 'Request',
    },
})
