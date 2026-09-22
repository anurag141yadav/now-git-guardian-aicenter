import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_level',
    view: 'workspace-guardian-badge-office-workspace-0',
    columns: ['number', 'code', 'name', 'system', 'is_deleted'],
})
