import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_system',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'code',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'is_deleted',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'description',
                            type: 'table_field',
                        },
                        {
                            field: 'host',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Credentials',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'authentication',
                            type: 'table_field',
                        },
                        {
                            field: 'username',
                            type: 'table_field',
                        },
                        {
                            field: 'password',
                            type: 'table_field',
                        },
                        {
                            field: 'oauth_entity_profile',
                            type: 'table_field',
                        },
                        {
                            field: 'mid_server',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Time Zone',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'time_zone',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'date_format',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'System Configuration',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'version',
                            type: 'table_field',
                        },
                        {
                            field: 'type',
                            type: 'table_field',
                        },
                        {
                            field: 'rate_limit_count',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
