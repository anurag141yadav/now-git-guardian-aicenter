import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['40bc08a01bb8ce506962fe60cd4bcbfd'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_request',
        basic_query_from: 'x_aleen_snguardian_request_activity',
        name: 'Actions',
        query_with: "current.addQuery('request', parent.sys_id);",
        reference_field: 'request',
        simple_reference: true,
        sys_name: 'Actions',
    },
})
