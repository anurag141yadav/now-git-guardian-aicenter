import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_reader = Table({
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
        prefix: 'READER',
    },
    label: 'Reader',
    name: 'x_aleen_snguardian_reader',
    schema: {
        code: StringColumn({
            maxLength: 80,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        location: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        name: StringColumn({
            maxLength: 100,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        type: ReferenceColumn({
            default:
                'javascript:new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_asset_type","READER");',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset_type',
        }),
    },
})
