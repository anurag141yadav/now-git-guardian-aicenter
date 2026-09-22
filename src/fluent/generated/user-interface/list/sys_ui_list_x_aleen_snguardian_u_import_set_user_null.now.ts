import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_import_set_user',
    view: default_view,
    columns: ['import_set_run', 'template_import_log'],
})
