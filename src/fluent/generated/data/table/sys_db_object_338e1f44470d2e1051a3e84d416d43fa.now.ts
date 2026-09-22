import { Table, StringColumn, ScriptColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_risk_rule = Table({
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
        prefix: 'RISKRULE',
    },
    label: 'Risk Rule',
    name: 'x_aleen_snguardian_risk_rule',
    schema: {
        description: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        evaluation_logic: ScriptColumn({
            maxLength: 8000,
        }),
        name: StringColumn({
            maxLength: 120,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        post_eval_action: ScriptColumn({
            label: 'Post Evaluation Action',
            maxLength: 8000,
        }),
    },
    createAccessControls: true,
    textIndex: true,
})
