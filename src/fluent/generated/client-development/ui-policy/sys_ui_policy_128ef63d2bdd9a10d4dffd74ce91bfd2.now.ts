import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['128ef63d2bdd9a10d4dffd74ce91bfd2'],
    table: 'x_aleen_snguardian_identity_system',
    shortDescription: 'Make Provisioning Status Read-Only Identity System',
    isolateScript: true,
    actions: [
        {
            field: 'provisioning_status',
            readOnly: true,
            table: 'x_aleen_snguardian_identity_system',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
