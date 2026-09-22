import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request_entity_action',
    view: 'sys_ref_list',
    columns: ['name'],
})
