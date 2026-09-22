import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_visitor',
    view: 'workspace-guardian-badge-office-workspace-0',
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
                            field: 'user_name',
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
                            field: 'master_user_id',
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
                    ],
                },
            ],
        },
        {
            caption: 'Data source',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'datasource',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [],
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
