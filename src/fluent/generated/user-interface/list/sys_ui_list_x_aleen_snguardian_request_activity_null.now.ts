import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request_activity',
    view: default_view,
    columns: ['number', 'activity', 'description', 'provisioning_action', 'provisioning_status'],
})
