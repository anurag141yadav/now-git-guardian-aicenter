import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_notification',
    view: 'Mobile',
    columns: [
        'number',
        'add_to_watchlist',
        'body',
        'include_host',
        'location',
        'status',
        'subject',
        'template',
        'to',
        'type',
    ],
})
