import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_identitytype = Table({
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
        number: 1,
        numberOfDigits: 2,
        prefix: 'IDENTITYTYPE',
    },
    display: 'name',
    label: [
        {
            label: 'Identity Type',
            plural: 'Identity Type',
        },
    ],
    name: 'x_aleen_snguardian_identitytype',
    schema: {
        code: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
        }),
        description: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 100,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
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
