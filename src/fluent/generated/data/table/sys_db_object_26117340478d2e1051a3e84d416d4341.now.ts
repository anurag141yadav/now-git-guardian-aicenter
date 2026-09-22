import { Table, IntegerColumn, ReferenceColumn, StringColumn, ListColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_policy_execution = Table({
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
        prefix: 'POLRUN',
    },
    label: 'Policy Execution',
    name: 'x_aleen_snguardian_policy_execution',
    schema: {
        accepted: IntegerColumn({
            maxLength: 40,
        }),
        compliance: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_risk_compliance',
        }),
        mitigated: IntegerColumn({
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
        rejected: IntegerColumn({
            maxLength: 40,
        }),
        risk: ListColumn({
            label: 'Risks',
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_risk',
        }),
        status: StringColumn({
            default: 'EVALUATION-INPROGRESS',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        total: IntegerColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
