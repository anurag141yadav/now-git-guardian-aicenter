import { Table, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_asset_location = Table({
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
        prefix: 'ASSETLOC',
    },
    label: 'Asset Location',
    name: 'x_aleen_snguardian_asset_location',
    schema: {
        asset: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset',
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
