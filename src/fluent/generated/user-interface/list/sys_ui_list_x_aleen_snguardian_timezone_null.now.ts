import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_timezone',
    view: default_view,
    columns: ['name', 'abbreviation', 'offset'],
})
