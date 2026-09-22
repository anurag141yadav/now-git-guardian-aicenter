import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_identity_system',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'identity',
                            type: 'table_field',
                        },
                        {
                            field: 'valid_from',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_action',
                            type: 'table_field',
                        },
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'system',
                            type: 'table_field',
                        },
                        {
                            field: 'valid_to',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_status',
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
            caption: 'Provisioning Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'provisioning_message',
                            type: 'table_field',
                        },
                        {
                            field: 'datasource',
                            type: 'table_field',
                        },
                        {
                            field: 'datasource_table',
                            type: 'table_field',
                        },
                        {
                            field: 'identifier',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Log',
            content: [
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
