import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_notification',
    view: default_view,
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
