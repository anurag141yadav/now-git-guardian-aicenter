import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_policy',
    view: 'workspace-risk-management-workspace-0',
    columns: ['number', 'code', 'risk', 'evaluation_frequency'],
})
