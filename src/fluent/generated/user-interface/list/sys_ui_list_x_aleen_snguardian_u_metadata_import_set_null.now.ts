import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_metadata_import_set',
    view: default_view,
    columns: [
        'u_name',
        'code',
        'description',
        'import_set_run',
        'is_deleted',
        'name',
        'template_import_log',
        'u_code',
        'u_description',
        'u_is_deleted',
    ],
})
