import { Table, StringColumn, BooleanColumn, ReferenceColumn, ChoiceColumn, ListColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor_watch_list = Table({
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
    label: [
        {
            label: 'Visitor Watch List',
            plural: 'Visitors Watch List',
        },
    ],
    name: 'x_aleen_snguardian_visitor_watch_list',
    schema: {
        email: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        first_name: StringColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        last_name: StringColumn({
            maxLength: 40,
        }),
        location: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        phone: StringColumn({
            maxLength: 40,
        }),
        scope: ChoiceColumn({
            default: 'GLOBAL',
            dropdown: 'dropdown_without_none',
            maxLength: 32,
        }),
        type: ListColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 4000,
        }),
    },
})
