import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_field_mapping_type',
    view: default_view,
    columns: ['code', 'name', 'description', 'is_deleted', 'category'],
})
