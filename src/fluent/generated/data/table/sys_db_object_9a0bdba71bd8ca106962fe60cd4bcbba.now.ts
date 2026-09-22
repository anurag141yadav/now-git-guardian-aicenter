import { Table, StringColumn, BooleanColumn, ReferenceColumn, ListColumn, GenericColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_asset = Table({
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
    audit: true,
    autoNumber: {
        number: 100000,
        numberOfDigits: 6,
        prefix: 'ASSET',
    },
    display: 'number',
    label: 'Asset',
    name: 'x_aleen_snguardian_asset',
    schema: {
        code: StringColumn({
            maxLength: 80,
        }),
        facility_code: StringColumn({
            maxLength: 100,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
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
        serial: StringColumn({
            maxLength: 80,
        }),
        status: ReferenceColumn({
            default:
                'javascript: new MetadataGlideRecordHelper().getRecordSysIdByCode("x_aleen_snguardian_status_code", "UNASSIGNED");',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEASSET^EQ',
            useReferenceQualifier: 'simple',
        }),
        sub_system: ListColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        sub_type: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset_type',
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        type: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset_type',
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            maxLength: 4000,
        }),
    },
})
