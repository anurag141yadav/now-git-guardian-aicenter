import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk_compliance',
    view: default_view,
    columns: [
        'number',
        'name',
        'active',
        'description',
        'evaluation_frequency',
        'evaluation_mode',
        'industry',
        'last_evaluated',
        'policies',
    ],
})
