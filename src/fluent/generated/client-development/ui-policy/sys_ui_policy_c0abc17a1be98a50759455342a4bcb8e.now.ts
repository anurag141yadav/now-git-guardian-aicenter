import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['c0abc17a1be98a50759455342a4bcb8e'],
    table: 'x_aleen_snguardian_identity_access',
    shortDescription: 'Disable Review Status change',
    isolateScript: true,
    conditions: 'review_action=663cbc361ba98a50759455342a4bcbb8^EQ',
    actions: [
        {
            field: 'review_status',
            readOnly: true,
            table: 'x_aleen_snguardian_identity_access',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
