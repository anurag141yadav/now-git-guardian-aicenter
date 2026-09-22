import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_event',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['number', 'badge_id', 'event_date_time', 'reader_id', 'system'],
})
