import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_provisioning_status',
    view: default_view,
    columns: ['code', 'name', 'description', 'is_deleted'],
})
