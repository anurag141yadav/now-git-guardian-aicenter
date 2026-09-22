import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk_instance',
    view: default_view,
    columns: [
        'number',
        'action_at',
        'assigned_to',
        'comments',
        'detected_at',
        'document',
        'document_table',
        'eta',
        'identity',
        'mitigation',
    ],
})
