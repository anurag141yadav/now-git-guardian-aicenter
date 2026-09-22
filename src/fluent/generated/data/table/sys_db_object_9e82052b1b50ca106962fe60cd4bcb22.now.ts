import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_feature = Table({
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
        number: 0,
        numberOfDigits: 2,
        prefix: 'SYSFEATURE',
    },
    label: 'System Feature List',
    name: 'x_aleen_snguardian_system_feature',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        description: StringColumn({
            maxLength: 100,
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
    },
})
