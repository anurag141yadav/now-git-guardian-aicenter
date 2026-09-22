import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_assertion',
    view: default_view,
    columns: ['code', 'name', 'type', 'system'],
})
