import { Table, BooleanColumn, StringColumn, DurationColumn, DateTimeColumn, ListColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_risk_compliance = Table({
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
        prefix: 'COM',
    },
    label: 'Compliance',
    name: 'x_aleen_snguardian_risk_compliance',
    schema: {
        active: BooleanColumn({
            default: 'FALSE',
            maxLength: 40,
        }),
        description: StringColumn({
            label: [
                {
                    plural: 'Description s',
                },
            ],
            maxLength: 300,
        }),
        evaluation_frequency: DurationColumn({
            maxLength: 40,
        }),
        evaluation_mode: StringColumn({
            default: 'MANUAL',
            maxLength: 40,
        }),
        last_evaluated: DateTimeColumn({
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
        policies: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_policy',
        }),
    },
    createAccessControls: true,
})
