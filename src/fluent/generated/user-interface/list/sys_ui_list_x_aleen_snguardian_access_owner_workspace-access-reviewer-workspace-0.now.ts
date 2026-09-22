import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_owner',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['sys_created_on', 'sys_created_by', 'sys_updated_on', 'sys_updated_by', 'sys_mod_count'],
})
