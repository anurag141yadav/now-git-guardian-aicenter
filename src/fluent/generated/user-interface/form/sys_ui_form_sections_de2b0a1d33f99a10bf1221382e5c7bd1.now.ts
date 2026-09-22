import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_visitor_visit',
    view: 'portaledit',
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
                        {
                            field: 'host',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'purpose',
                            type: 'table_field',
                        },
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
