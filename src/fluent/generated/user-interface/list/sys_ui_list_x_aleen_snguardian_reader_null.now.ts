import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_reader',
    view: default_view,
    columns: ['code', 'name', 'system', 'location'],
})
