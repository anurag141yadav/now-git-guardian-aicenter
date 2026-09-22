import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_asset_import_set',
    view: default_view,
    columns: ['import_set_run', 'template_import_log'],
})
