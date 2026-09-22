import {
    VariableSet,
    SelectBoxVariable,
    YesNoVariable,
    DateTimeVariable,
    DateVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const visitDetails = VariableSet({
    $id: Now.ID['6623aa841b684e106962fe60cd4bcb9f'],
    title: 'Visit Details',
    internalName: 'visit_details',
    description: 'Visit Details',
    layout: '2across',
    order: 200,
    version: 250,
    variables: {
        visit_purpose: SelectBoxVariable({
            question: 'Visit Purpose',
            order: 400,
            mandatory: true,
            choices: {
                OTHERS: {
                    label: 'Others',
                    inactive: false,
                    sequence: 100,
                },
                PERSONAL: {
                    label: 'Personal Visit',
                    inactive: false,
                    sequence: 500,
                },
                TRAINING: {
                    label: 'Training',
                    inactive: false,
                    sequence: 300,
                },
                LEGAL: {
                    label: 'Legal Appointment',
                    inactive: false,
                    sequence: 600,
                },
                'BUSINESS-MEETING': {
                    label: 'Business Meeting',
                    inactive: false,
                    sequence: 100,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                INTERVIEW: {
                    label: 'Interview',
                    inactive: false,
                    sequence: 200,
                },
                EVENT: {
                    label: 'Event',
                    inactive: false,
                    sequence: 400,
                },
            },
            choiceTable: 'x_aleen_snguardian_visitor_visit',
            choiceField: 'purpose',
        }),
        is_recurring_visit: YesNoVariable({
            question: 'Recurring Visit',
            order: 500,
            mandatory: true,
            includeNone: true,
        }),
        visit_start_date: DateTimeVariable({
            question: 'Start Date',
            order: 600,
            tooltip: 'Date&Time are specific to Location TZ',
            showHelp: true,
            helpText: "All dates and times are displayed in the selected location's time zone.",
        }),
        visit_end_date: DateTimeVariable({
            question: 'End Date',
            order: 700,
        }),
        recurring_start_date: DateVariable({
            question: 'Start Date',
            order: 770,
        }),
        recurring_end_date: DateVariable({
            question: 'End Date',
            order: 775,
        }),
        recurring_start_time: SingleLineTextVariable({
            question: 'Start Time',
            order: 780,
            showHelp: true,
            helpTag: 'Format HH:mm:ss',
            helpText: 'Valid Time Format HH:mm:ss',
        }),
        recurring_end_time: SingleLineTextVariable({
            question: 'End Time',
            order: 785,
            showHelp: true,
            helpTag: 'Format HH:mm:ss',
            helpText: 'Valid Time format HH:mm:ss',
        }),
        visit_all_day_long: YesNoVariable({
            question: 'Visit All Day Long',
            order: 790,
            defaultValue: 'No',
        }),
        visit_recurring_type: SelectBoxVariable({
            question: 'Visit Recurring Type',
            order: 795,
            choices: {
                WEEKLY: {
                    label: 'Weekly',
                    inactive: false,
                    sequence: 200,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                CUSTOM: {
                    label: 'Custom',
                    inactive: false,
                    sequence: 400,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
                DAILY: {
                    label: 'Daily',
                    inactive: false,
                    sequence: 100,
                    pricingDetails: [
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'misc',
                        },
                        {
                            amount: 0,
                            currencyType: 'USD',
                            field: 'rec_misc',
                        },
                    ],
                },
            },
        }),
    },
})
