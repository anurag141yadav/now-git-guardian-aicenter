import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_provisioning_status',
    view: 'sys_ref_list',
    columns: ['name'],
})
