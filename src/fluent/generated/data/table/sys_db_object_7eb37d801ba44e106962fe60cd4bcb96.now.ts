import { Table, ReferenceColumn, BooleanColumn, StringColumn, ListColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_access_location = Table({
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
        prefix: 'ACCESSLOC',
    },
    display: 'access_level',
    label: 'Access Location',
    name: 'x_aleen_snguardian_access_location',
    schema: {
        access_level: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_access_level',
        }),
        is_default: BooleanColumn({
            default: 'False',
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
        scope: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_identitytype',
        }),
    },
})
