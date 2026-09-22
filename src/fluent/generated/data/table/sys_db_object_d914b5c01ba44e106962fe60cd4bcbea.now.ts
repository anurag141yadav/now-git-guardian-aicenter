import { Table, ReferenceColumn, BooleanColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_identity_location = Table({
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
        prefix: 'IDENTLOC',
    },
    label: 'Identity Location',
    name: 'x_aleen_snguardian_identity_location',
    schema: {
        identity: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        is_deleted: BooleanColumn({
            default: false,
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
    },
})
