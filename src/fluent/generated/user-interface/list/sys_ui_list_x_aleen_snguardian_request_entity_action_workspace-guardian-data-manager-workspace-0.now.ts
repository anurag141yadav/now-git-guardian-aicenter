import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request_entity_action',
    view: 'workspace-guardian-data-manager-workspace-0',
    columns: ['code', 'name', 'is_deleted'],
})
