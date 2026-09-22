import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_field_mapping_type',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['code', 'name', 'description', 'is_deleted', 'category'],
})
