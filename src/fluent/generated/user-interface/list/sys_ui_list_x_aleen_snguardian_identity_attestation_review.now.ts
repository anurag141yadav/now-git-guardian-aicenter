import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_attestation',
    view: 'Review',
    columns: ['number', 'assertion', 'valid_from', 'valid_to', 'review_action', 'review_status'],
})
