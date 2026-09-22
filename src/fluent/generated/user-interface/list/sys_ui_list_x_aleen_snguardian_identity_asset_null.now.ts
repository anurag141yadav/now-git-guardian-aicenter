import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_asset',
    view: default_view,
    columns: ['number', 'asset.serial', 'identity', 'valid_from', 'valid_to', 'status'],
})
