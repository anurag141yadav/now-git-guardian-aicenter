import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_rule_master_config = Table({
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
        prefix: 'RULEMASTER',
    },
    label: 'Rule Master Config',
    name: 'x_aleen_snguardian_rule_master_config',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        name: StringColumn({
            label: 'Description',
            maxLength: 200,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        rule: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_decision',
        }),
    },
    createAccessControls: true,
})
