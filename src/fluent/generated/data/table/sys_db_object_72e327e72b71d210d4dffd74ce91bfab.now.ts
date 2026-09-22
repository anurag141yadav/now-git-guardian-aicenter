import { Table, StringColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_visit_operation = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'VISOPERATION',
    },
    label: 'Visit Operation',
    name: 'x_aleen_snguardian_visit_operation',
    schema: {
        comments: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        end_date: DateTimeColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        operation: StringColumn({
            maxLength: 40,
        }),
        start_date: DateTimeColumn({
            maxLength: 40,
        }),
        visit: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_visit',
        }),
    },
    createAccessControls: true,
})
