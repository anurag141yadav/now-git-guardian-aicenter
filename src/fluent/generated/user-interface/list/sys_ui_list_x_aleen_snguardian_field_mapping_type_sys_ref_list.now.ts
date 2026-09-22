import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_field_mapping_type',
    view: 'sys_ref_list',
    columns: ['name'],
})
