import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_scheduled_job',
    view: default_view,
    parent: 'x_aleen_snguardian_system',
    relationship: '96d593551b19c610759455342a4bcb43',
    columns: ['name', 'system', 'function', 'run_period', 'run_start', 'active', 'run_type'],
})
