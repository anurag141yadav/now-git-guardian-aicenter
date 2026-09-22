import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
    view: 'workspace-lobby-admin-workspace-0',
    columns: ['name', 'type', 'is_deleted'],
})
