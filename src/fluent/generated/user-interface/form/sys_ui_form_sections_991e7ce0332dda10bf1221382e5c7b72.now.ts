import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_visitor',
    view: 'workspace-lobby-admin-workspace-0',
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'first_name',
                            type: 'table_field',
                        },
                        {
                            field: 'email',
                            type: 'table_field',
                        },
                        {
                            field: 'visitor_type',
                            type: 'table_field',
                        },
                        {
                            field: 'company',
                            type: 'table_field',
                        },
                        {
                            field: 'group',
                            type: 'table_field',
                        },
                        {
                            field: 'identity_validation_date',
                            type: 'table_field',
                        },
                        {
                            field: 'photo',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'last_name',
                            type: 'table_field',
                        },
                        {
                            field: 'phone',
                            type: 'table_field',
                        },
                        {
                            field: 'visitor_status',
                            type: 'table_field',
                        },
                        {
                            field: 'need_assistance',
                            type: 'table_field',
                        },
                        {
                            field: 'identity_validation_type',
                            type: 'table_field',
                        },
                        {
                            field: 'identity_validation_expires_on',
                            type: 'table_field',
                        },
                        {
                            field: 'do_not_admit',
                            type: 'table_field',
                        },
                        {
                            field: 'watch_list',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Change Log',
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
