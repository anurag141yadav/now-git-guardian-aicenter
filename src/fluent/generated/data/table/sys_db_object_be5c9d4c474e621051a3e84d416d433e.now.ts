import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_decision_table_choice = Table({
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
    label: 'Decision Table Choice',
    name: 'x_aleen_snguardian_decision_table_choice',
    schema: {
        asset_sub_type: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        badge_assign_method: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        health_questions_in_lobby: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        id_scan_in_lobby: StringColumn({
            dropdown: 'dropdown_with_none',
            label: 'ID Scan in Lobby',
            maxLength: 40,
        }),
        id_scan_type: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        nda_sign_in_lobby: StringColumn({
            dropdown: 'dropdown_with_none',
            label: 'NDA Sign in Lobby',
            maxLength: 40,
        }),
        notification_type: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        photo_capture_in_lobby: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        visiting_actor: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        visitor_action: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
