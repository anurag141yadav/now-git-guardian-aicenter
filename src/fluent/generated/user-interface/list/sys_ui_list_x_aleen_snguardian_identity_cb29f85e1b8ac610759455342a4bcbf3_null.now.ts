import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_attestation',
    view: default_view,
    parent: 'x_aleen_snguardian_identity',
    relationship: 'cb29f85e1b8ac610759455342a4bcbf3',
    columns: ['assertion', 'assertion.type', 'valid_from', 'valid_to', 'status'],
})
