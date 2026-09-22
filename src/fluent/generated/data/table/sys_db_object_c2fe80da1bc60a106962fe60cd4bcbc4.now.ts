import { Table, StringColumn, BooleanColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_assertion = Table({
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
        prefix: 'ASSERTION',
    },
    label: 'Prerequisite',
    name: 'x_aleen_snguardian_assertion',
    schema: {
        code: StringColumn({
            maxLength: 80,
        }),
        description: StringColumn({
            maxLength: 200,
        }),
        identifier: StringColumn({
            maxLength: 80,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        is_realtime_validation_required: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        name: StringColumn({
            maxLength: 200,
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
        type: ChoiceColumn({
            default: 'TRAINING',
            dropdown: 'dropdown_without_none',
            maxLength: 32,
        }),
    },
})
