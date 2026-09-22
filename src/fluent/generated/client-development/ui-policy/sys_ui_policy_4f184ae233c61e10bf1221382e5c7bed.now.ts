import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['4f184ae233c61e10bf1221382e5c7bed'],
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
    shortDescription: 'Hide Location',
    isolateScript: true,
    conditions: 'type=NDA^EQ',
    actions: [
        {
            field: 'scope',
            visible: false,
            mandatory: false,
            table: 'x_aleen_snguardian_visitor_nda_email_templates',
            fieldMessageType: '',
            valueAction: '',
        },
        {
            field: 'location',
            visible: true,
            readOnly: false,
            mandatory: true,
            table: 'x_aleen_snguardian_visitor_nda_email_templates',
            fieldMessageType: '',
            valueAction: '',
        },
    ],
})
