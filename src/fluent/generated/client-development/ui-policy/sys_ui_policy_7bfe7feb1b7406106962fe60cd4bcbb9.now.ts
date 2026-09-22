import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['7bfe7feb1b7406106962fe60cd4bcbb9'],
    table: 'x_aleen_snguardian_identity_access',
    shortDescription: 'Show Provisioning Error Message If it is failed',
    isolateScript: true,
    conditions:
        'provisioning_status=0d8fced51bbc8210759455342a4bcb45^ORprovisioning_status=418fced51bbc8210759455342a4bcb47^ORprovisioning_status=cd8fced51bbc8210759455342a4bcb47^ORprovisioning_status=878c61a31b3cc2106962fe60cd4bcbe6^EQ',
    actions: [
        {
            field: 'provisioning_message',
            visible: true,
            table: 'x_aleen_snguardian_identity_access',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
