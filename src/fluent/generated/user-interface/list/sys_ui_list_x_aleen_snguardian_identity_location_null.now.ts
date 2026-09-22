import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_location',
    view: default_view,
    columns: ['location'],
})
