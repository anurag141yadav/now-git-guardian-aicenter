import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity',
    view: default_view,
    columns: ['user_name', 'first_name', 'last_name', 'email', 'phone', 'type', 'status', 'source_system_code'],
})
