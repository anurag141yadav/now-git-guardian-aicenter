import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_function',
    view: default_view,
    columns: ['name', 'function', 'system', 'type', 'url', 'pre_validation_required'],
})
