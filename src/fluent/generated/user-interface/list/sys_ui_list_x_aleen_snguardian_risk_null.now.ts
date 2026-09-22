import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk',
    view: default_view,
    columns: [
        'number',
        'name',
        'active',
        'code',
        'description',
        'entity',
        'resolution',
        'risk_rule',
        'severity',
        'sla',
    ],
})
