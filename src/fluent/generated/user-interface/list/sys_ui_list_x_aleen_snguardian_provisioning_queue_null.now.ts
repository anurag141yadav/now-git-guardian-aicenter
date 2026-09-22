import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_provisioning_queue',
    view: default_view,
    columns: ['number', 'data', 'function', 'is_processed', 'options', 'provisioning_record', 'system'],
})
