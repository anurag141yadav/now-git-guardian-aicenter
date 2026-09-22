import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_asset',
    view: 'RPT7d67284d1bb98290759455342a4bcb2c',
    columns: ['number', 'valid_from', 'valid_to', 'provisioning_action', 'provisioning_status'],
})
