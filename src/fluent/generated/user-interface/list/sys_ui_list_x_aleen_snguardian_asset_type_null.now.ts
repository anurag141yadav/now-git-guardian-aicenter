import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_asset_type',
    view: default_view,
    columns: ['code', 'name', 'description', 'parent', 'is_deleted'],
})
