import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['b6697ece1ba14e506962fe60cd4bcb3d'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'Review Owners  Manually',
    isolateScript: true,
    conditions: 'type=AREAOWNER^ORtype=MANAGER^NQtypeISEMPTY^EQ',
    actions: [
        {
            field: 'task_owners',
            visible: false,
            table: 'x_aleen_snguardian_review',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
