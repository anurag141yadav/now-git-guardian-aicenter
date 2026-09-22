import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_requisite',
    view: default_view,
    parent: 'x_aleen_snguardian_access_level',
    relationship: '52233c561b8a0a106962fe60cd4bcbac',
    columns: ['assertion', 'assertion.type', 'enforcement_type'],
})
