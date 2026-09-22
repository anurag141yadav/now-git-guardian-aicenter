import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_location',
    view: 'workspace-lobby-admin-workspace-0',
    columns: ['number', 'name', 'type', 'state', 'country', 'latitude', 'longitude'],
})
