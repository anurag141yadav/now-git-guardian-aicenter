import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_function_type',
    view: 'sys_ref_list',
    columns: ['name'],
})
