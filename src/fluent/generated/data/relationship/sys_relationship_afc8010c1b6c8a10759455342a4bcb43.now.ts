import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['afc8010c1b6c8a10759455342a4bcb43'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_system',
        basic_query_from: 'x_aleen_snguardian_system_id_matching_rule',
        name: 'ID Matching Rule',
        query_with: "current.addQuery('system', parent.sys_id);",
        reference_field: 'system',
        simple_reference: true,
        sys_name: 'ID Matching Rule',
    },
})
