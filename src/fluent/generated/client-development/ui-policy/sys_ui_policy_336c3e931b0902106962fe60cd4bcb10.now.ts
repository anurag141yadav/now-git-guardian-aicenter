import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['336c3e931b0902106962fe60cd4bcb10'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'If Review Criteria is Expiry',
    isolateScript: true,
    conditions: 'criteria=EXPIRY^EQ',
    order: 30,
    actions: [
        {
            field: 'expiry_status',
            visible: true,
            table: 'x_aleen_snguardian_review',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
