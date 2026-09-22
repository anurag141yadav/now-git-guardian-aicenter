import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_asset',
    view: 'workspace_access_reviewer_workspace_0',
    columns: ['number', 'asset.serial', 'identity', 'valid_from', 'valid_to', 'status'],
})
