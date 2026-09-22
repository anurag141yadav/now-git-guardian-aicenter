import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk',
    view: 'workspace-risk-management-workspace-0',
    columns: ['name', 'description', 'severity', 'risk_rule', 'resolution'],
})
