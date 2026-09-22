import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_field_mapping',
    view: default_view,
    columns: ['number', 'type', 'source', 'target', 'is_advanced', 'is_required', 'system'],
})
