import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_office',
    view: 'workspace-guardian-badge-office-workspace-0',
    columns: ['name', 'locations', 'officers', 'office'],
})
