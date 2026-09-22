import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['b2cab6131b0902106962fe60cd4bcb8b'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'If Review Criteria is Location',
    isolateScript: true,
    conditions: 'criteria=LOCATION^EQ',
    order: 10,
    actions: [
        {
            field: 'locations',
            visible: true,
            table: 'x_aleen_snguardian_review',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
