import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['925bb2531b0902106962fe60cd4bcbe3'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'If Review Criteria is Access Levels',
    isolateScript: true,
    conditions: 'criteria=ACCESLEVELS^EQ',
    order: 20,
    actions: [
        {
            field: 'access_levels',
            visible: true,
            table: 'x_aleen_snguardian_review',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
