import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_location',
    view: 'sys_ref_list',
    columns: ['access_level'],
})
