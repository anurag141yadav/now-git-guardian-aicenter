import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_asset',
    view: 'RPT0349e4cd1bb98290759455342a4bcb3a',
    columns: ['number', 'valid_from', 'valid_to', 'provisioning_action', 'provisioning_status', 'asset', 'status'],
})
