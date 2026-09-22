import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_u_identity_asset_import_set = Table({
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
    label: 'U Identity Asset Import Set',
    name: 'x_aleen_snguardian_u_identity_asset_import_set',
    schema: {
        u_asset_id: StringColumn({
            maxLength: 40,
        }),
        u_asset_status: StringColumn({
            label: 'Asset status',
            maxLength: 40,
        }),
        u_card_number: StringColumn({
            label: 'Card number',
            maxLength: 40,
        }),
        u_is_deleted: StringColumn({
            label: 'Is deleted',
            maxLength: 40,
        }),
        u_issue_type: StringColumn({
            label: 'Issue type',
            maxLength: 40,
        }),
        u_system: StringColumn({
            maxLength: 50,
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
