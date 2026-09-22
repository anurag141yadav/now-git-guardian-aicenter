import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_system',
    view: 'workspace-guardian-data-manager-workspace-0',
    columns: ['sys_created_on', 'sys_created_by', 'sys_updated_on', 'sys_updated_by', 'sys_mod_count'],
})
