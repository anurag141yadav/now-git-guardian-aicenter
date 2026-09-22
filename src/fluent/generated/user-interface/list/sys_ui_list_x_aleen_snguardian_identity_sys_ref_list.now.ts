import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity',
    view: 'sys_ref_list',
    columns: ['user_name', 'first_name', 'last_name', 'email', 'phone', 'type', 'status'],
})
