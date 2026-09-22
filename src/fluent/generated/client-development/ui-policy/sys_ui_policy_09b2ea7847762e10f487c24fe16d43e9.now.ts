import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['09b2ea7847762e10f487c24fe16d43e9'],
    table: 'x_aleen_snguardian_visitor_visit',
    shortDescription: 'Set Merge Visit Form view Policies',
    global: false,
    isolateScript: true,
    view: 'mergevisit',
    actions: [
        {
            field: 'type',
            readOnly: true,
            table: 'x_aleen_snguardian_visitor_visit',
        },
        {
            field: 'status',
            readOnly: true,
            table: 'x_aleen_snguardian_visitor_visit',
        },
        {
            field: 'location',
            readOnly: true,
            table: 'x_aleen_snguardian_visitor_visit',
        },
    ],
})
