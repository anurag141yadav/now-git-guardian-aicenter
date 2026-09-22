import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
    view: 'sys_ref_list',
    columns: ['name'],
})
