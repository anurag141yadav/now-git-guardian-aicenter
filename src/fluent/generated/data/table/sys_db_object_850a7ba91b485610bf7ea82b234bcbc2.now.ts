import {
    Table,
    TableNameColumn,
    DocumentIdColumn,
    StringColumn,
    DateTimeColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_system_scheduled_job_history = Table({
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
        prefix: 'SYSJOBID',
    },
    label: 'System Scheduled Job History',
    name: 'x_aleen_snguardian_system_scheduled_job_history',
    schema: {
        datasource_table: TableNameColumn({
            label: 'Data Source Table',
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            maxLength: 32,
        }),
        description: StringColumn({
            isFullUTF8: true,
            maxLength: 200,
        }),
        end_time: DateTimeColumn({
            maxLength: 40,
        }),
        importset: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        remarks: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        script: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system_scheduled_job',
        }),
        start_time: DateTimeColumn({
            default: 'javascript:gs.nowDateTime();',
            maxLength: 40,
        }),
        status: StringColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
