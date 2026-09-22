import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_owner = Table({
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
        numberOfDigits: 3,
        prefix: 'SYSOWNER',
    },
    label: 'System Owner',
    name: 'x_aleen_snguardian_system_owner',
    schema: {
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        owner: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
    },
})
