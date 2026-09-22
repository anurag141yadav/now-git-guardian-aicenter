import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['c42dbad31b0902106962fe60cd4bcb48'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'If Review Criteria is  Review',
    isolateScript: true,
    conditions: 'criteria=REVIEW^EQ',
    order: 40,
    actions: [
        {
            field: 'review_state',
            visible: true,
            table: 'x_aleen_snguardian_review',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
