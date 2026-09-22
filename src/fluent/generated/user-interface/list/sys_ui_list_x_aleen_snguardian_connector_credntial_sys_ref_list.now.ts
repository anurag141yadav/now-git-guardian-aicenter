import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_connector_credntial',
    view: 'sys_ref_list',
    columns: ['name'],
})
