import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_office',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['name', 'locations', 'officers', 'office'],
})
