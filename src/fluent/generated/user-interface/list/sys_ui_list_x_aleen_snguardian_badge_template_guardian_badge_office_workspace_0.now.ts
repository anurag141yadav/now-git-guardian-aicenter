import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_template',
    view: 'guardian_badge_office_workspace_0',
    columns: ['name', 'type', 'front', 'back'],
})
