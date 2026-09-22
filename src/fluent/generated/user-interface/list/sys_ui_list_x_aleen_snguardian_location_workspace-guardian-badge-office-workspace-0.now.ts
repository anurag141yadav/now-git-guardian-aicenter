import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_location',
    view: 'workspace-guardian-badge-office-workspace-0',
    columns: ['number', 'name', 'type', 'state', 'country', 'latitude', 'longitude'],
})
