import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_access_level_import_set = Table({
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
    label: 'U Access Level Import Set',
    name: 'x_aleen_snguardian_u_access_level_import_set',
    schema: {
        targetsysid: StringColumn({
            label: 'TargetSysId',
            maxLength: 40,
        }),
        u_code: StringColumn({
            maxLength: 40,
        }),
        u_criticality: StringColumn({
            maxLength: 40,
        }),
        u_is_deleted: StringColumn({
            maxLength: 40,
        }),
        u_location: StringColumn({
            maxLength: 40,
        }),
        u_name: StringColumn({
            maxLength: 40,
        }),
        u_system: StringColumn({
            maxLength: 40,
        }),
    },
})
