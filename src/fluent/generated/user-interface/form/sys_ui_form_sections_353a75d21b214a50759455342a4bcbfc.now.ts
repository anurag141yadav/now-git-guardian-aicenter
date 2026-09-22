import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_identity_asset',
    view: 'workspace-access-reviewer-workspace-0',
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
                            field: 'provisioning_status',
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
                            field: 'datasource',
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
