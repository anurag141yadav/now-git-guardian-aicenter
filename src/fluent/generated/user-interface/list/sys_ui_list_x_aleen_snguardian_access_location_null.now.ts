import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_location',
    view: default_view,
    columns: ['access_level', 'location'],
})
