import {
    Table,
    StringColumn,
    TableNameColumn,
    DocumentIdColumn,
    DateTimeColumn,
    ReferenceColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_provisioning_monitor = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    audit: true,
    autoNumber: {
        prefix: 'PRO',
    },
    display: 'datasource',
    label: 'Integration Monitor',
    name: 'x_aleen_snguardian_provisioning_monitor',
    schema: {
        category: StringColumn({
            default: 'PROVISIONING',
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        datasource_table: TableNameColumn({
            label: 'Datasource_Table',
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            maxLength: 32,
        }),
        end_time: DateTimeColumn({
            maxLength: 40,
        }),
        function: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system_function',
        }),
        identity: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        notes: StringColumn({
            isFullUTF8: true,
            maxLength: 1000,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        start_time: DateTimeColumn({
            maxLength: 40,
        }),
        status: StringColumn({
            default: 'PENDING',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            maxLength: 4000,
        }),
    },
    createAccessControls: true,
})
