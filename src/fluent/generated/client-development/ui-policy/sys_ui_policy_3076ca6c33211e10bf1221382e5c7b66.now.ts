import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['3076ca6c33211e10bf1221382e5c7b66'],
    table: 'x_aleen_snguardian_visitor',
    shortDescription: 'Based On Visitor Type Hide columns',
    reverseIfFalse: false,
    isolateScript: true,
    conditions: 'visitor_type=GOVT^ORvisitor_type=VIP^EQ',
    scriptTrue: 'function onCondition() {',
    scriptFalse: `function onCondition() {
}`,
    order: 10,
    actions: [
        {
            field: 'company',
            visible: false,
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'photo',
            visible: false,
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'identity_validation_type',
            visible: false,
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'identity_validation_date',
            visible: false,
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'visitor_status',
            readOnly: true,
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'identity_validation_expires_on',
            visible: false,
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'need_assistance',
            table: 'x_aleen_snguardian_visitor',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
