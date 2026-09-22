import { Table, ListColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_status_code = Table({
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
        prefix: 'STATUSCODE',
    },
    label: 'Status Code',
    name: 'x_aleen_snguardian_status_code',
    schema: {
        applicable_to: ListColumn({
            maxLength: 4000,
        }),
        code: StringColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
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
    },
})
