import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_decision_table_choice',
    view: default_view,
    columns: [
        'asset_sub_type',
        'badge_assign_method',
        'health_questions_in_lobby',
        'id_scan_in_lobby',
        'id_scan_type',
        'nda_sign_in_lobby',
        'notification_type',
        'photo_capture_in_lobby',
    ],
})
