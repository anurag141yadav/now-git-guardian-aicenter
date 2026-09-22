import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_asset_import_set = Table({
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
    label: 'U Asset Import Set',
    name: 'x_aleen_snguardian_u_asset_import_set',
    schema: {
        u_code: StringColumn({
            maxLength: 80,
        }),
        u_is_deleted: StringColumn({
            maxLength: 40,
        }),
        u_name: StringColumn({
            maxLength: 100,
        }),
        u_serial: StringColumn({
            maxLength: 80,
        }),
        u_status: StringColumn({
            maxLength: 40,
        }),
        u_sub_system: StringColumn({
            maxLength: 40,
        }),
        u_subtype: StringColumn({
            maxLength: 60,
        }),
        u_system: StringColumn({
            maxLength: 40,
        }),
        u_type: StringColumn({
            maxLength: 40,
        }),
    },
})
