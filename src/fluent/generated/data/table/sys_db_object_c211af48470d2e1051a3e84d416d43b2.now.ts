import { Table, BooleanColumn, StringColumn, ReferenceColumn, DurationColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_risk = Table({
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
        prefix: 'RISK',
    },
    display: 'name',
    label: 'Risk',
    name: 'x_aleen_snguardian_risk',
    schema: {
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        code: StringColumn({
            maxLength: 40,
        }),
        description: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        entity: StringColumn({
            maxLength: 40,
        }),
        name: StringColumn({
            maxLength: 100,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        resolution: StringColumn({
            maxLength: 40,
        }),
        risk_rule: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_risk_rule',
        }),
        severity: StringColumn({
            default: 'MEDIUM',
            maxLength: 40,
        }),
        sla: DurationColumn({
            default: '1 00:00:00',
            mandatory: true,
            maxLength: 40,
        }),
        type: ChoiceColumn({
            dropdown: 'dropdown_with_none',
            label: 'Risk Type',
            maxLength: 32,
        }),
    },
    createAccessControls: true,
    textIndex: true,
})
