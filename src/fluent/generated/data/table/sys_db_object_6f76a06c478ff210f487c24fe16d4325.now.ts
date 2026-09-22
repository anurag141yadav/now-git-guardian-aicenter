import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_messages = Table({
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
        prefix: 'MESBUN',
    },
    label: 'Messages',
    name: 'x_aleen_snguardian_messages',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        description: StringColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            default: 'False',
            maxLength: 40,
        }),
        message: StringColumn({
            maxLength: 5000,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
    },
    createAccessControls: true,
})
