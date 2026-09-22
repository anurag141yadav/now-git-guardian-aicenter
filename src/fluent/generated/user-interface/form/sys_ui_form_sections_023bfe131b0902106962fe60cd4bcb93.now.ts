import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_review',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'type',
                            type: 'table_field',
                        },
                        {
                            field: 'start_date',
                            type: 'table_field',
                        },
                        {
                            field: 'task_owners',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'due_date',
                            type: 'table_field',
                        },
                        {
                            field: 'process_deleted',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Filters',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'criteria',
                            type: 'table_field',
                        },
                        {
                            field: 'access_levels',
                            type: 'table_field',
                        },
                        {
                            field: 'locations',
                            type: 'table_field',
                        },
                        {
                            field: 'review_state',
                            type: 'table_field',
                        },
                        {
                            field: 'expiry_status',
                            type: 'table_field',
                        },
                        {
                            field: 'using_status',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Exceptions',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'post_due_date_action',
                            type: 'table_field',
                        },
                        {
                            field: 'override_records',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Notes',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'formatter',
                            formatterRef: 'Activities_Filtered',
                        },
                        {
                            type: 'formatter',
                            formatterName: 'special_handling_notes',
                            formatterRef: '07103c0dc351120095ccd02422d3ae9b',
                        },
                    ],
                },
            ],
        },
    ],
})
