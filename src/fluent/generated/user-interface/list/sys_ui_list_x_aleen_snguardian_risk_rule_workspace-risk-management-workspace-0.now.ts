import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk_rule',
    view: 'workspace-risk-management-workspace-0',
    columns: ['number', 'name', 'description'],
})
