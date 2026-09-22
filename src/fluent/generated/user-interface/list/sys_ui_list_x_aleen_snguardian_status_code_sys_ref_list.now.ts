import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_status_code',
    view: 'sys_ref_list',
    columns: ['name', 'applicable_to'],
})
