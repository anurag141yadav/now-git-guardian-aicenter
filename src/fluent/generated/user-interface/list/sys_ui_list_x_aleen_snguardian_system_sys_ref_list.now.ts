import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system',
    view: 'sys_ref_list',
    columns: ['code'],
})
