import { Table, ReferenceColumn, DateTimeColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_scheduled_job = Table({
    actions: {
        read: true,
        update: false,
        delete: true,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'SYSJOB',
    },
    extends: 'sysauto_script',
    label: 'System Scheduled Job',
    name: 'x_aleen_snguardian_system_scheduled_job',
    schema: {
        function: ReferenceColumn({
            dependent: 'system',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system_function',
            referenceQual: 'javascript: new ConditionHelper().filterSystemFunctions();',
        }),
        last_run_datetime: DateTimeColumn({
            maxLength: 40,
            readOnly: true,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        system: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
    },
})
