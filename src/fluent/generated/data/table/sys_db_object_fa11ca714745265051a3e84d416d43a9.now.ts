import { Table, StringColumn, ListColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_risk_owner = Table({
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
        prefix: 'RISKOWNER',
    },
    label: 'Risk Owners',
    name: 'x_aleen_snguardian_risk_owner',
    schema: {
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        owners: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        risk: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_risk',
        }),
    },
    createAccessControls: true,
})
