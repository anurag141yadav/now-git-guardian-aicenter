import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_mitigation',
    view: default_view,
    columns: ['number', 'name', 'code', 'steps'],
})
