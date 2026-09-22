import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_asset',
    view: default_view,
    columns: ['number', 'serial', 'type', 'status', 'system'],
})
