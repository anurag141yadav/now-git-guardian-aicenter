import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_location',
    view: default_view,
    columns: ['number', 'name', 'type', 'state', 'country', 'latitude', 'longitude'],
})
