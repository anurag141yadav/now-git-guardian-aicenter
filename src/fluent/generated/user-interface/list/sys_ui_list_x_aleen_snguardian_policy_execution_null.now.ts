import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_policy_execution',
    view: default_view,
    columns: ['number', 'accepted', 'compliance', 'mitigated', 'policy', 'rejected', 'risk', 'status', 'total'],
})
