import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_system_function',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'name',
                            type: 'table_field',
                        },
                        {
                            field: 'function',
                            type: 'table_field',
                        },
                        {
                            field: 'type',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'description',
                            type: 'table_field',
                        },
                        {
                            field: 'category',
                            type: 'table_field',
                        },
                        {
                            field: 'is_deleted',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'API',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'url',
                            type: 'table_field',
                        },
                        {
                            field: 'payload',
                            type: 'table_field',
                        },
                        {
                            field: 'pre_validation_required',
                            type: 'table_field',
                        },
                        {
                            field: 'pre_validation_script',
                            type: 'table_field',
                        },
                        {
                            field: 'payload_handler',
                            type: 'table_field',
                        },
                        {
                            field: 'success_response_handler',
                            type: 'table_field',
                        },
                        {
                            field: 'error_response_handler',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'preceding',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'succeeding',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Background Job Settings',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'supports_background_job',
                            type: 'table_field',
                        },
                        {
                            field: 'last_success_datetime',
                            type: 'table_field',
                        },
                        {
                            field: 'last_event_position',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'allow_periodic_schedule',
                            type: 'table_field',
                        },
                        {
                            field: 'last_failure_datetime',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
