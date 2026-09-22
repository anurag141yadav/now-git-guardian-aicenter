import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_asset',
    view: 'Review',
    columns: ['number', 'identity', 'asset', 'valid_from', 'valid_to', 'review_action', 'review_status'],
})
