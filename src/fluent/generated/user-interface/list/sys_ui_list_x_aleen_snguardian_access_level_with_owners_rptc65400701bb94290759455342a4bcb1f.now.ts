import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_level_with_owners',
    view: 'RPTc65400701bb94290759455342a4bcb1f',
    columns: ['acl_name', 'acl_system', 'ao_type', 'acl_criticality'],
})
