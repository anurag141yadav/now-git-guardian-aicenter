import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5ac7a87f1b100e106962fe60cd4bcbc1'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_system',
        basic_query_from: 'x_aleen_snguardian_system_function',
        name: 'Functions',
        query_with: "current.addQuery('system', parent.sys_id);",
        reference_field: 'system',
        simple_reference: true,
        sys_name: 'Functions',
    },
})
