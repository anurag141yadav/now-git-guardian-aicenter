import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_visitor_visit',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'location',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'type',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'visitor',
                            type: 'table_field',
                        },
                        {
                            field: 'group',
                            type: 'table_field',
                        },
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'check_in_check_out_as_a_group',
                            type: 'table_field',
                        },
                        {
                            field: 'visitors',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'purpose',
                            type: 'table_field',
                        },
                        {
                            field: 'is_recurring',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_start_date',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_start_time',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_value',
                            type: 'table_field',
                        },
                        {
                            field: 'start_date',
                            type: 'table_field',
                        },
                        {
                            field: 'is_deleted',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'is_all_day_event',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_type',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_end_date',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_end_time',
                            type: 'table_field',
                        },
                        {
                            field: 'comments',
                            type: 'table_field',
                        },
                        {
                            field: 'end_date',
                            type: 'table_field',
                        },
                        {
                            field: 'work_notes',
                            type: 'table_field',
                        },
                        {
                            field: 'request',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Host & Escort',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'host',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'escrort',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'NDA',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'is_nda_signed',
                            type: 'table_field',
                        },
                        {
                            field: 'nda_signed_date_time',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'nda',
                            type: 'table_field',
                        },
                        {
                            field: 'nda_sign_expiry_date_time',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Change Log',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'work_notes',
                            type: 'table_field',
                        },
                        {
                            type: 'formatter',
                            formatterRef: 'Activities_Filtered',
                        },
                    ],
                },
            ],
        },
    ],
})
