import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_field_mapping_type',
    view: 'workspace-guardian-data-manager-workspace-0',
    columns: ['number', 'code', 'name', 'description', 'is_deleted', 'category'],
})
