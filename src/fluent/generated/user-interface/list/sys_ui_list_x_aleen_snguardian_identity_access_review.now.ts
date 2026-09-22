import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_access',
    view: 'Review',
    columns: ['number', 'identity', 'access_level', 'valid_from', 'valid_to', 'review_action', 'review_status'],
})
