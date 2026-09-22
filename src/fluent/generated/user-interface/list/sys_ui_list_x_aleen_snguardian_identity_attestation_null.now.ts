import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_attestation',
    view: default_view,
    columns: ['number', 'assertion', 'valid_from', 'valid_to', 'identity'],
})
