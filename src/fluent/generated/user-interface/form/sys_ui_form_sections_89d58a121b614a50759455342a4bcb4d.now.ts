import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_review_task',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'review',
                            type: 'table_field',
                        },
                        {
                            field: 'total_records',
                            type: 'table_field',
                        },
                        {
                            field: 'pending',
                            type: 'table_field',
                        },
                        {
                            field: 'assigned_to',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'completed',
                            type: 'table_field',
                        },
                        {
                            field: 'errors',
                            type: 'table_field',
                        },
                        {
                            field: 'delegated_to',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
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
