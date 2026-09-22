import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity',
    view: 'workspace-guardian-badge-office-workspace-0',
    columns: ['user_name', 'first_name', 'is_deleted', 'email', 'department', 'last_name', 'datasource', 'type'],
})
