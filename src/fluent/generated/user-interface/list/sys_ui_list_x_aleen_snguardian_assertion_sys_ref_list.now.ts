import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_assertion',
    view: 'sys_ref_list',
    columns: ['name', 'type'],
})
