import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_identity_access_import_set = Table({
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
    label: 'U Identity Access Import Set',
    name: 'x_aleen_snguardian_u_identity_access_import_set',
    schema: {
        u_access_id: StringColumn({
            maxLength: 40,
        }),
        u_asset_id: StringColumn({
            label: 'Asset Id',
            maxLength: 50,
        }),
        u_identifier: StringColumn({
            maxLength: 40,
        }),
        u_status: StringColumn({
            maxLength: 40,
        }),
        u_system: StringColumn({
            maxLength: 40,
        }),
        u_user_id: StringColumn({
            maxLength: 40,
        }),
        u_valid_from: StringColumn({
            label: 'Valid from',
            maxLength: 40,
        }),
        u_valid_to: StringColumn({
            label: 'Valid to',
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
