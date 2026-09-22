import { Table, StringColumn, ReferenceColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_import_set_user = Table({
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
    extends: 'sys_import_set_row',
    label: 'U User Importset',
    name: 'x_aleen_snguardian_u_import_set_user',
    schema: {
        u_datasource_table: StringColumn({
            label: 'Data Source Table',
            maxLength: 40,
        }),
        u_datasource: StringColumn({
            maxLength: 40,
        }),
        u_department: StringColumn({
            maxLength: 40,
        }),
        u_email: StringColumn({
            maxLength: 40,
        }),
        u_first_name: StringColumn({
            label: 'First name',
            maxLength: 40,
        }),
        u_full_name: StringColumn({
            maxLength: 100,
        }),
        u_identifier_type: StringColumn({
            maxLength: 40,
        }),
        u_identifier: StringColumn({
            maxLength: 60,
        }),
        u_is_deleted: StringColumn({
            maxLength: 40,
        }),
        u_last_name: StringColumn({
            label: 'Last name',
            maxLength: 40,
        }),
        u_location: StringColumn({
            maxLength: 100,
        }),
        u_manager: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        u_master_user_id: StringColumn({
            label: 'Master user ID',
            maxLength: 40,
        }),
        u_mobile_credential_id: StringColumn({
            label: 'Mobile Credential Id',
            maxLength: 60,
        }),
        u_phone: StringColumn({
            maxLength: 40,
        }),
        u_photo: StringColumn({
            maxLength: 10000,
        }),
        u_prov_action: StringColumn({
            default: "'NONE'",
            maxLength: 40,
        }),
        u_skip_propogation: StringColumn({
            maxLength: 40,
        }),
        u_source_system_code: StringColumn({
            label: 'Source system code',
            maxLength: 40,
        }),
        u_status: StringColumn({
            maxLength: 40,
        }),
        u_type: StringColumn({
            maxLength: 40,
        }),
        u_user_name: StringColumn({
            label: 'User name',
            maxLength: 40,
        }),
        u_valid_from: DateTimeColumn({
            maxLength: 40,
        }),
        u_valid_to: DateTimeColumn({
            maxLength: 40,
        }),
        u_work_notes: StringColumn({
            maxLength: 200,
        }),
    },
})
