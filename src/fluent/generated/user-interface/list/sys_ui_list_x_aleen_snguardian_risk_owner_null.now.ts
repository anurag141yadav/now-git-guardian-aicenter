import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk_owner',
    view: default_view,
    columns: ['number', 'owners', 'risk'],
})
