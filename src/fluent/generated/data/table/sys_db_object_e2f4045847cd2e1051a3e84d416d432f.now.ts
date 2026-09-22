import { Table, StringColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_risk_mitigation = Table({
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
    label: 'Risk Mitigation',
    name: 'x_aleen_snguardian_risk_mitigation',
    schema: {
        condition: StringColumn({
            maxLength: 40,
        }),
        effectiveness_score: IntegerColumn({
            default: '5',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        mitigation: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_mitigation',
        }),
        mode: StringColumn({
            default: 'MANUAL',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        order: IntegerColumn({
            default: '1',
            maxLength: 40,
        }),
        risk: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_risk',
        }),
    },
    createAccessControls: true,
})
