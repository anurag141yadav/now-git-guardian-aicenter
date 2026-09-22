import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_policy',
    view: default_view,
    columns: [
        'number',
        'name',
        'active',
        'code',
        'evaluation_frequency',
        'evaluation_mode',
        'last_evaluated',
        'risk',
        'version',
    ],
})
