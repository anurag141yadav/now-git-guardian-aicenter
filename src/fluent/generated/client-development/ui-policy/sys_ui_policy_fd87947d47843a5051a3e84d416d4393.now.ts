import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['fd87947d47843a5051a3e84d416d4393'],
    table: 'x_aleen_snguardian_badge_office',
    shortDescription: 'If Mobile Credential is Supported',
    isolateScript: true,
    conditions: 'mc_supported=true^EQ',
    actions: [
        {
            field: 'mc_nfc_system',
            visible: true,
            table: 'x_aleen_snguardian_badge_office',
        },
        {
            field: 'mc_sub_type',
            visible: true,
            table: 'x_aleen_snguardian_badge_office',
        },
        {
            field: 'web_provisioning',
            visible: true,
            table: 'x_aleen_snguardian_badge_office',
        },
    ],
})
