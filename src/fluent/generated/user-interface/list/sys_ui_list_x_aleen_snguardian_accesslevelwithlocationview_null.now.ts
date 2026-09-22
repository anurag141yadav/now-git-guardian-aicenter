import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_accesslevelwithlocationview',
    view: default_view,
    columns: ['acl_code', 'acl_criticality', 'acl_is_deleted', 'acl_name', 'al_location'],
})
