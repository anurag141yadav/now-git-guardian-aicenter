import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_asset_location',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['asset', 'location', 'number'],
})
