import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_guardianboapprovalview',
    view: default_view,
    columns: [
        'approval_approval_column',
        'approval_approval_journal_column',
        'approval_approval_source',
        'approval_approver',
        'approval_comments',
        'approval_document_id',
        'approval_due_date',
        'approval_expected_start',
        'approval_group',
        'approval_iteration',
    ],
})
