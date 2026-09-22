import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e4ea818c1b6c8a10759455342a4bcb9c'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_system',
        basic_query_from: 'x_aleen_snguardian_system_field_mapping',
        name: 'Field Mappings',
        query_with: "current.addQuery('system', parent.sys_id);",
        reference_field: 'system',
        simple_reference: true,
        sys_name: 'Field Mappings',
    },
})
