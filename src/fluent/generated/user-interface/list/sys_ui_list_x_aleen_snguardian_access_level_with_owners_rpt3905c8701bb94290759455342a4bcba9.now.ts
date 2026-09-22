import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_level_with_owners',
    view: 'RPT3905c8701bb94290759455342a4bcba9',
    columns: ['acl_name', 'acl_system', 'ao_type', 'acl_criticality'],
})
