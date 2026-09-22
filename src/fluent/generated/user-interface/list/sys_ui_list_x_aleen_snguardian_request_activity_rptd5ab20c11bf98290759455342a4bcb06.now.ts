import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request_activity',
    view: 'RPTd5ab20c11bf98290759455342a4bcb06',
    columns: ['request', 'provisioning_action', 'provisioning_status'],
})
