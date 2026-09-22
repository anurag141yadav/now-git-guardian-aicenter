import { Table, StringColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_badge_template = Table({
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
        number: 100,
        numberOfDigits: 3,
        prefix: 'BADGETEMPLATE',
    },
    label: 'Badge Template',
    name: 'x_aleen_snguardian_badge_template',
    schema: {
        back: StringColumn({
            isFullUTF8: true,
            maxLength: 80000,
        }),
        front: StringColumn({
            isFullUTF8: true,
            maxLength: 80000,
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
        type: ChoiceColumn({
            default: 'Employee',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
    },
})
