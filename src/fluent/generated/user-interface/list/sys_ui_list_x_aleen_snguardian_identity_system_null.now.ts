import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_system',
    view: default_view,
    columns: ['number', 'system', 'valid_from', 'valid_to', 'status'],
})
