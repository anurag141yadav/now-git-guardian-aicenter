import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request',
    view: default_view,
    columns: ['number', 'request_type', 'approval', 'assigned_to', 'status', 'state', 'sys_created_on'],
})
