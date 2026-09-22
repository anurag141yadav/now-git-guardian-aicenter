import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request_activity',
    view: default_view,
    parent: 'x_aleen_snguardian_request',
    relationship: '40bc08a01bb8ce506962fe60cd4bcbfd',
    columns: ['number', 'activity', 'description', 'provisioning_action', 'provisioning_status', 'request'],
})
