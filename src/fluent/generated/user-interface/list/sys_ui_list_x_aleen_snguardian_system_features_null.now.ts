import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_features',
    view: default_view,
    columns: ['number', 'feature', 'value'],
})
