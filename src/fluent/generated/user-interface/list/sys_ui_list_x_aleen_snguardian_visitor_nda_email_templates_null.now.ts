import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
    view: default_view,
    columns: ['name', 'type', 'is_deleted'],
})
