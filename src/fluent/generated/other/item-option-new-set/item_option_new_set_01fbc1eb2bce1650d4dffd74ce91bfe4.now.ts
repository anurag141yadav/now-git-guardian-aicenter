import { VariableSet, YesNoVariable, SingleLineTextVariable, CustomVariable } from '@servicenow/sdk/core'

export const metadata = VariableSet({
    $id: Now.ID['01fbc1eb2bce1650d4dffd74ce91bfe4'],
    title: 'Metadata',
    internalName: 'metadata',
    version: 55,
    variables: {
        able_to_submit: YesNoVariable({
            question: 'Able To Submit',
            defaultValue: 'Yes',
            hidden: true,
        }),
        is_kiosk_user: SingleLineTextVariable({
            question: 'Is Kiosk User',
            defaultValue: 'No',
            hidden: true,
        }),
        lobby_config: SingleLineTextVariable({
            question: 'Lobby Config',
            order: 1,
            hidden: true,
        }),
        error_message: SingleLineTextVariable({
            question: 'Error Message',
            order: 2,
            hidden: true,
        }),
        found_in_watchlist: YesNoVariable({
            question: 'Found in Watchlist',
            order: 3,
            defaultValue: 'No',
            hidden: true,
        }),
        need_host_confirmation: YesNoVariable({
            question: 'Need Host Confirmation',
            order: 4,
            hidden: true,
        }),
        location_data: SingleLineTextVariable({
            question: 'Location Data',
            order: 5,
            hidden: true,
        }),
        action_config: SingleLineTextVariable({
            question: 'Action Config',
            order: 5,
            hidden: true,
        }),
        validation_input_data: SingleLineTextVariable({
            question: 'Validation Input Data',
            order: 6,
            hidden: true,
        }),
        visit_details_metadata: SingleLineTextVariable({
            question: 'Visit Details Metadata',
            order: 7,
            hidden: true,
        }),
        visitors_data: CustomVariable({
            question: 'Visitors Data',
            order: 8,
            widget: 'af2fc5ad33ea5e10bf1221382e5c7b1a',
        }),
        visitors_count: SingleLineTextVariable({
            question: 'Visitors Count',
            order: 9,
            hidden: true,
        }),
        visit_type_metadata: SingleLineTextVariable({
            question: 'Visit Type Metadata',
            order: 10,
            hidden: true,
        }),
        start_hours: SingleLineTextVariable({
            question: 'Start Hours',
            order: 11,
            hidden: true,
        }),
    },
})
