import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identitytype',
    view: 'workspace-guardian-data-manager-workspace-0',
    columns: ['number', 'name', 'code', 'description', 'is_deleted'],
})
