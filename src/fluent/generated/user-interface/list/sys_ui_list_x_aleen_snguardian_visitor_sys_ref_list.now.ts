import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor',
    view: 'sys_ref_list',
    columns: ['first_name', 'last_name', 'email', 'phone', 'visitor_type', 'visitor_status'],
})
