import { Table, StringColumn, BooleanColumn, ScriptColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_field_mapping = Table({
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
        prefix: 'SYSFIELDMAP',
    },
    label: 'System Field Mapping',
    name: 'x_aleen_snguardian_system_field_mapping',
    schema: {
        datatype: StringColumn({
            default: 'String',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        default_value: StringColumn({
            maxLength: 40,
        }),
        is_advanced: BooleanColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            maxLength: 40,
        }),
        is_required: BooleanColumn({
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
        script: ScriptColumn({
            maxLength: 8000,
        }),
        source: StringColumn({
            maxLength: 200,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        target: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        type: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_field_mapping_type',
        }),
    },
})
