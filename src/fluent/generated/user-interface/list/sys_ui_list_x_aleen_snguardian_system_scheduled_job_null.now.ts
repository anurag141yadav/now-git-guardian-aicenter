import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_scheduled_job',
    view: default_view,
    columns: ['name', 'system', 'function', 'run_period', 'run_start', 'active'],
})
