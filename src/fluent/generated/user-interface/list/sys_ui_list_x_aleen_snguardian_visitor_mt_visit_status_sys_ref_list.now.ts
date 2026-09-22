import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_mt_visit_status',
    view: 'sys_ref_list',
    columns: ['name'],
})
