import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_u_identity_asset_import_set',
    view: default_view,
    columns: [
        'import_set_run',
        'template_import_log',
        'u_asset_id',
        'u_asset_status',
        'u_card_number',
        'u_is_deleted',
        'u_user_id',
        'u_valid_from',
        'u_valid_to',
    ],
})
