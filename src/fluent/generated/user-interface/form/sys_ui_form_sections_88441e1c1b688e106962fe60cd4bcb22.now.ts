import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_system',
    view: 'workspace-guardian-data-manager-workspace-0',
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
                            field: 'username',
                            type: 'table_field',
                        },
                        {
                            field: 'password',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
