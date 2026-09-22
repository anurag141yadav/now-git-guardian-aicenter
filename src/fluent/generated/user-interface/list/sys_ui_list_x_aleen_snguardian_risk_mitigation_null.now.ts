import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk_mitigation',
    view: default_view,
    columns: ['condition', 'effectiveness_score', 'mitigation', 'mode', 'order', 'risk'],
})
