import { Table, ListColumn, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_reader_access_levels = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: false,
    autoNumber: {
        prefix: 'READER_ACL',
    },
    label: 'Reader Access Levels',
    name: 'x_aleen_snguardian_reader_access_levels',
    schema: {
        access_levels: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_access_level',
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        reader: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_reader',
        }),
    },
    createAccessControls: true,
})
