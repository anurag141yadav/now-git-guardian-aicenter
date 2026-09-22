import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_visitor_visit',
    view: 'mergevisit',
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
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'group',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'visitors',
                            type: 'table_field',
                        },
                        {
                            field: 'purpose',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'is_recurring',
                            type: 'table_field',
                        },
                        {
                            field: 'recurring_value',
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
                            field: 'start_date',
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
    ],
})
