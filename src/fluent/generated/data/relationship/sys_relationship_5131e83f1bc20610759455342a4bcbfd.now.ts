import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5131e83f1bc20610759455342a4bcbfd'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_aleen_snguardian_review_task',
        basic_query_from: 'x_aleen_snguardian_identity_asset',
        name: 'Review Asset Items',
        query_with: "current.addQuery('review_task', parent.sys_id);",
        simple_reference: false,
        sys_name: 'Review Asset Items',
    },
})
