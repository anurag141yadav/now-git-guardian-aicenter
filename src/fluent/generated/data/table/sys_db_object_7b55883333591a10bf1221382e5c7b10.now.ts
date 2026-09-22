import { Table, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor_request = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    audit: true,
    autoNumber: {
        prefix: 'VISREQ',
    },
    extends: 'task',
    label: 'Visitor Request',
    name: 'x_aleen_snguardian_visitor_request',
    schema: {
        request_type: ReferenceColumn({
            attributes: {
                encode_utf8: false,
            },
            maxLength: 32,
            referenceTable: 'sc_cat_item_producer',
        }),
        stage: StringColumn({
            maxLength: 40,
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request_status',
        }),
        visit: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_visit',
        }),
    },
    createAccessControls: true,
})
