import {
    Table,
    BooleanColumn,
    StringColumn,
    DurationColumn,
    DateTimeColumn,
    ListColumn,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_policy = Table({
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
        prefix: 'POLCI',
    },
    display: 'name',
    label: 'Policy',
    name: 'x_aleen_snguardian_policy',
    schema: {
        active: BooleanColumn({
            maxLength: 40,
        }),
        code: StringColumn({
            maxLength: 40,
        }),
        evaluation_frequency: DurationColumn({
            maxLength: 40,
        }),
        evaluation_mode: StringColumn({
            maxLength: 40,
        }),
        last_evaluated: DateTimeColumn({
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
        risk: ListColumn({
            label: 'Risks',
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_risk',
        }),
        version: IntegerColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
    textIndex: true,
})
