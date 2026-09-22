import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_policy',
    view: 'sys_ref_list',
    columns: ['name'],
})
