import { Table, StringColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_policy_enforcement = Table({
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
        prefix: 'POLENFORCE',
    },
    label: 'Policy Enforcement',
    name: 'x_aleen_snguardian_policy_enforcement',
    schema: {
        eval_strategy: StringColumn({
            default: 'MITIGATIVE',
            dropdown: 'dropdown_without_none',
            label: 'Evaluation Strategy',
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        policy: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_policy',
        }),
        send_notification: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        trigger_source: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        trigger: StringColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
