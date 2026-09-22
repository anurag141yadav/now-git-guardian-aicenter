import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_access',
    view: 'access_review',
    parent: 'x_aleen_snguardian_review_task',
    relationship: '999d71e81bd946106962fe60cd4bcb2c',
    columns: ['number', 'access_level', 'valid_from', 'valid_to', 'review_action', 'review_status'],
})
