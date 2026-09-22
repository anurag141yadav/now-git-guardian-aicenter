import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_events_refined',
    view: default_view,
    columns: ['access_level', 'asset', 'batch_id', 'category', 'event_date_time', 'identity', 'reader'],
})
