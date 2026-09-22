import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_identity_access_import_set',
    view: default_view,
    columns: [
        'import_set_run',
        'template_import_log',
        'u_access_id',
        'u_email',
        'u_system',
        'u_valid_from',
        'u_valid_to',
    ],
})
