import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_asset',
    view: 'sys_ref_list',
    columns: ['number', 'status', 'serial', 'system', 'type'],
})
