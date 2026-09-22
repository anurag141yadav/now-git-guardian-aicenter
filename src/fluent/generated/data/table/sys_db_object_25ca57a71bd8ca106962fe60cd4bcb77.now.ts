import { Table, StringColumn, BooleanColumn, ReferenceColumn, GenericColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_access_level = Table({
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
    autoNumber: {
        numberOfDigits: 4,
        prefix: 'ACCESSLEVEL',
    },
    label: 'Access Level',
    name: 'x_aleen_snguardian_access_level',
    schema: {
        code: StringColumn({
            label: [
                {
                    hint: 'Unique  Identifier in the Target System',
                    help: 'Unique  Identifier in the Target System',
                },
            ],
            maxLength: 40,
        }),
        criticality: StringColumn({
            default: 'MODERATE',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        name: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            label: 'Notes',
            maxLength: 4000,
        }),
    },
})
