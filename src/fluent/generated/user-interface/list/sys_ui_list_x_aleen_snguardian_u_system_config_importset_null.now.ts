import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_system_config_importset',
    view: default_view,
    columns: [
        'u_name',
        'import_set_run',
        'template_import_log',
        'u_attribute',
        'u_code',
        'u_config_type',
        'u_datatype',
        'u_default_value',
        'u_dependency',
        'u_description',
    ],
})
