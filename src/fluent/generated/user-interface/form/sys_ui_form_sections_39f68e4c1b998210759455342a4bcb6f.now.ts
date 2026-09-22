import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_identity_access',
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
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_status',
                            type: 'table_field',
                        },
                        {
                            field: 'associated_asset',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'access_level',
                            type: 'table_field',
                        },
                        {
                            field: 'valid_to',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_action',
                            type: 'table_field',
                        },
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
                            field: 'provisioning_message',
                            type: 'table_field',
                        },
                        {
                            field: 'datasource',
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
            caption: 'Review Info',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'last_reviewed_on',
                            type: 'table_field',
                        },
                        {
                            field: 'review_assigned_to',
                            type: 'table_field',
                        },
                        {
                            field: 'review_action',
                            type: 'table_field',
                        },
                        {
                            field: 'review_task',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'last_reviewed_by',
                            type: 'table_field',
                        },
                        {
                            field: 'delegated_to',
                            type: 'table_field',
                        },
                        {
                            field: 'review_status',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'last_used_on',
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
