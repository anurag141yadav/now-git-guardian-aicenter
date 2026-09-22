import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_provisioning_monitor',
    view: default_view,
    columns: [
        'number',
        'category',
        'datasource',
        'datasource_table',
        'end_time',
        'function',
        'notes',
        'start_time',
        'status',
        'system',
    ],
})
