import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_scheduled_job_history',
    view: default_view,
    columns: [
        'number',
        'datasource',
        'datasource_table',
        'description',
        'end_time',
        'importset',
        'remarks',
        'script',
        'start_time',
        'status',
    ],
})
