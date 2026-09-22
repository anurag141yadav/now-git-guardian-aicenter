import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f165a76b2b71d210d4dffd74ce91bf30'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_visitor_visit',
        basic_query_from: 'x_aleen_snguardian_visit_operation',
        name: 'Visit Operations',
        query_with: "current.addQuery('visit', parent.sys_id);",
        reference_field: 'visit',
        simple_reference: true,
        sys_name: 'Visit Operations',
    },
})
