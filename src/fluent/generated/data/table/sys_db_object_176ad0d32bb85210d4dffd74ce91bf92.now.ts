import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor_visit_type = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    display: 'name',
    label: [
        {
            label: 'Visit Type',
            plural: 'Visit Type',
        },
    ],
    name: 'x_aleen_snguardian_visitor_visit_type',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        name: StringColumn({
            label: 'Description',
            maxLength: 100,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
    },
})
