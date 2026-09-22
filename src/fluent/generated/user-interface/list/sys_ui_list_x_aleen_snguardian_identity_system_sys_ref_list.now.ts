import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_system',
    view: 'sys_ref_list',
    columns: ['number', 'identity', 'system'],
})
