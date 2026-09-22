import { Table, StringColumn, BooleanColumn, ReferenceColumn, ScriptColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_id_matching_rule = Table({
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
        prefix: 'SYSIDMATCHRULE',
    },
    label: 'System ID Matching Rule',
    name: 'x_aleen_snguardian_system_id_matching_rule',
    schema: {
        attribute: StringColumn({
            maxLength: 40,
        }),
        is_advanced: BooleanColumn({
            default: false,
            maxLength: 40,
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
        scope: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_field_mapping_type',
            referenceQual: 'category=RECON^EQ',
            useReferenceQualifier: 'simple',
        }),
        script: ScriptColumn({
            maxLength: 8000,
        }),
        sequence: IntegerColumn({
            maxLength: 40,
        }),
        system_attribute: StringColumn({
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
    },
})
