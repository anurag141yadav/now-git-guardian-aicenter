import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_location',
    view: 'sys_ref_list',
    columns: ['number', 'name'],
})
