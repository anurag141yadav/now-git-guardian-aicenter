import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['248db2171b0902106962fe60cd4bcb7c'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'If Review Criteria is Usage',
    isolateScript: true,
    conditions: 'criteria=USAGE^EQ',
    order: 50,
    actions: [
        {
            field: 'using_status',
            visible: true,
            table: 'x_aleen_snguardian_review',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
