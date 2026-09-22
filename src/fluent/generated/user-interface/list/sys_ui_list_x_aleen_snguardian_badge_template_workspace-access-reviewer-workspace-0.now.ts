import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_template',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['name', 'type', 'front', 'back'],
})
