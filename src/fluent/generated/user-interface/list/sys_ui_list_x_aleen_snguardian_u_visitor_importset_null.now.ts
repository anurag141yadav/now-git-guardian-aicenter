import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_visitor_importset',
    view: default_view,
    columns: [
        'import_set_run',
        'template_import_log',
        'u_first_name',
        'u_identity_validation_type',
        'u_last_name',
        'u_photo',
        'u_source_system_code',
        'u_visitor',
    ],
})
