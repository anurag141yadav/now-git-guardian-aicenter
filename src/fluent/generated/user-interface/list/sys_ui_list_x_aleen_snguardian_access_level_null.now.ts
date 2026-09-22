import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_level',
    view: default_view,
    columns: ['number', 'name', 'criticality', 'system', 'is_deleted'],
})
