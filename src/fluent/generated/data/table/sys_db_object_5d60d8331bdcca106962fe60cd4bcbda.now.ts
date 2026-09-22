import { Table, ReferenceColumn, BooleanColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_features = Table({
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
        prefix: 'SYSTEMFEATURE',
    },
    label: 'System Features',
    name: 'x_aleen_snguardian_system_features',
    schema: {
        feature: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system_feature',
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
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
        value: StringColumn({
            maxLength: 40,
        }),
    },
})
