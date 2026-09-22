import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_template',
    view: 'workspace-guardian-data-manager-workspace-0',
    columns: ['name', 'type', 'front', 'back'],
})
