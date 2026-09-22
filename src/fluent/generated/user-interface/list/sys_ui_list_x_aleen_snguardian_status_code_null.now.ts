import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_status_code',
    view: default_view,
    columns: ['code', 'name', 'applicable_to', 'is_deleted'],
})
