import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_visit_operation',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'visit',
                            type: 'table_field',
                        },
                        {
                            field: 'operation',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'New Section',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'start_date',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'end_date',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'comments',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
