import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_asset_type = Table({
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
        prefix: 'ASSETTYPE',
    },
    label: 'Asset Type',
    name: 'x_aleen_snguardian_asset_type',
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
        parent: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset_type',
        }),
    },
    textIndex: true,
})
