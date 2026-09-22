import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_badge_office',
    view: default_view,
    columns: ['name', 'locations', 'officers', 'office'],
})
