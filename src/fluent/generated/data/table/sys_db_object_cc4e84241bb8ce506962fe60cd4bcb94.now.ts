import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_request_activity_import_set = Table({
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
    label: 'U Request Activity Import Set',
    name: 'x_aleen_snguardian_u_request_activity_import_set',
    schema: {
        u_datasource_table: StringColumn({
            maxLength: 40,
        }),
        u_datasource: StringColumn({
            maxLength: 40,
        }),
        u_description: StringColumn({
            label: 'description',
            maxLength: 255,
        }),
        u_provisioning_action: StringColumn({
            maxLength: 40,
        }),
        u_provisioning_status: StringColumn({
            maxLength: 40,
        }),
        u_request: StringColumn({
            maxLength: 40,
        }),
    },
})
