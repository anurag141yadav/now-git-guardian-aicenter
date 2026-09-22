import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_system_id_matching_rule',
    view: default_view,
    columns: ['number', 'attribute', 'system_attribute', 'is_advanced', 'scope'],
})
