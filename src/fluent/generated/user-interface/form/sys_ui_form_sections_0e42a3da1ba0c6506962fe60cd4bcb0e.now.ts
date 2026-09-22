import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_identity',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'user_name',
                            type: 'table_field',
                        },
                        {
                            field: 'first_name',
                            type: 'table_field',
                        },
                        {
                            field: 'email',
                            type: 'table_field',
                        },
                        {
                            field: 'type',
                            type: 'table_field',
                        },
                        {
                            field: 'photo',
                            type: 'table_field',
                        },
                        {
                            field: 'department',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'master_user_id',
                            type: 'table_field',
                        },
                        {
                            field: 'last_name',
                            type: 'table_field',
                        },
                        {
                            field: 'phone',
                            type: 'table_field',
                        },
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'is_deleted',
                            type: 'table_field',
                        },
                        {
                            field: 'manager',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Data source',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'u_skip_propogation',
                            type: 'table_field',
                        },
                        {
                            field: 'datasource',
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
                            field: 'work_notes',
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
        {
            caption: 'Journal',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'journal',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
