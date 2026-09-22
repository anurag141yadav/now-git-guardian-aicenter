import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['7632439b1b0902106962fe60cd4bcb4f'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_review',
        basic_query_from: 'x_aleen_snguardian_review_task',
        name: 'Review Task',
        query_with: "current.addQuery('review', parent.sys_id);",
        reference_field: 'review',
        simple_reference: true,
        sys_name: 'Review Task',
    },
})
