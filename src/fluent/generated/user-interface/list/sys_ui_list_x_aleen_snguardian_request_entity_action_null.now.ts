import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request_entity_action',
    view: default_view,
    columns: ['code', 'name', 'applicable_to', 'is_deleted'],
})
