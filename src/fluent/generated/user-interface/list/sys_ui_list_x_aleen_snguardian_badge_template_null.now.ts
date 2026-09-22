import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_template',
    view: default_view,
    columns: ['name', 'type', 'front', 'back'],
})
