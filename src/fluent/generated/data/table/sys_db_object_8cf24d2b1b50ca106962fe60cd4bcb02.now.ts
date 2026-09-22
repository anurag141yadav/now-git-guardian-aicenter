import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_provisioning_status = Table({
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
        prefix: 'PROVSTATUS',
    },
    label: 'Provisioning Status',
    name: 'x_aleen_snguardian_provisioning_status',
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
