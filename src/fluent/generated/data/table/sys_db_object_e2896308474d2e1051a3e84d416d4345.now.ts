import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_mitigation = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'MIT',
    },
    display: 'name',
    label: 'Mitigation',
    name: 'x_aleen_snguardian_mitigation',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        name: StringColumn({
            maxLength: 80,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        steps: StringColumn({
            isFullUTF8: true,
            label: 'Instructions',
            maxLength: 4000,
        }),
    },
    createAccessControls: true,
    textIndex: true,
})
