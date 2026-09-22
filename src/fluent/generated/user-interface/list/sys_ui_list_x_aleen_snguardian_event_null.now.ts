import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_event',
    view: default_view,
    columns: ['number', 'badge_id', 'event_date_time', 'reader_id', 'system', 'type'],
})
