import { Table, ChoiceColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_field_mapping_type = Table({
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
        prefix: 'FIELDMAPTYPE',
    },
    label: 'Field Mapping Type',
    name: 'x_aleen_snguardian_field_mapping_type',
    schema: {
        category: ChoiceColumn({
            default: 'PROVISION',
            dropdown: 'dropdown_with_none',
            mandatory: true,
            maxLength: 40,
        }),
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
    },
})
