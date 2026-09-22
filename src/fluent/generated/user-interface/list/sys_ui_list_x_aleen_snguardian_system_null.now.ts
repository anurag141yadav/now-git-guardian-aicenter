import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system',
    view: default_view,
    columns: ['number', 'code', 'description', 'host'],
})
