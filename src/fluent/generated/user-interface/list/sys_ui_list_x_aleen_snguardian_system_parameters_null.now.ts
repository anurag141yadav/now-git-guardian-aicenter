import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_parameters',
    view: default_view,
    columns: ['number', 'type', 'property_name', 'property_value'],
})
