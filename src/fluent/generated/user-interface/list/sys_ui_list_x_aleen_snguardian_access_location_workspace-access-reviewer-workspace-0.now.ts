import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_location',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['number', 'access_level', 'location'],
})
