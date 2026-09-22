import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_identity_asset',
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
                            field: 'is_replacement',
                            type: 'table_field',
                        },
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_action',
                            type: 'table_field',
                        },
                        {
                            field: 'datasource',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'asset',
                            type: 'table_field',
                        },
                        {
                            field: 'valid_to',
                            type: 'table_field',
                        },
                        {
                            field: 'replace_asset',
                            type: 'table_field',
                        },
                        {
                            field: 'is_deleted',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_status',
                            type: 'table_field',
                        },
                        {
                            field: 'issue_type',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Review Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'identifier',
                            type: 'table_field',
                        },
                        {
                            field: 'provisioning_message',
                            type: 'table_field',
                        },
                        {
                            field: 'last_reviewed_on',
                            type: 'table_field',
                        },
                        {
                            field: 'last_used_on',
                            type: 'table_field',
                        },
                        {
                            field: 'review_assigned_to',
                            type: 'table_field',
                        },
                        {
                            field: 'review_log',
                            type: 'table_field',
                        },
                        {
                            field: 'delegated_to',
                            type: 'table_field',
                        },
                        {
                            field: 'last_reviewed_by',
                            type: 'table_field',
                        },
                        {
                            field: 'review_action',
                            type: 'table_field',
                        },
                        {
                            field: 'review_status',
                            type: 'table_field',
                        },
                        {
                            field: 'review_task',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'History',
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
