import { Table, StringColumn, Password2Column, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_parameters = Table({
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
        prefix: 'SYSPARAM',
    },
    label: 'System Parameters',
    name: 'x_aleen_snguardian_system_parameters',
    schema: {
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        property_name: StringColumn({
            maxLength: 40,
        }),
        property_value: StringColumn({
            maxLength: 500,
        }),
        secure_property_value: Password2Column({
            maxLength: 1000,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        type: ChoiceColumn({
            dropdown: 'dropdown_with_none',
            mandatory: true,
            maxLength: 32,
        }),
    },
})
