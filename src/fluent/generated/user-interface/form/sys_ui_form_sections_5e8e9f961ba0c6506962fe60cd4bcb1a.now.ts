import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_request',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'number',
                            type: 'table_field',
                        },
                        {
                            field: 'request_for',
                            type: 'table_field',
                        },
                        {
                            field: 'state',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'request_type',
                            type: 'table_field',
                        },
                        {
                            field: 'assigned_to',
                            type: 'table_field',
                        },
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                        {
                            field: 'stage',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Info',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'sys_created_on',
                            type: 'table_field',
                        },
                        {
                            field: 'closed_at',
                            type: 'table_field',
                        },
                        {
                            field: 'opened_at',
                            type: 'table_field',
                        },
                        {
                            field: 'sys_updated_on',
                            type: 'table_field',
                        },
                        {
                            field: 'close_notes',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'sys_created_by',
                            type: 'table_field',
                        },
                        {
                            field: 'closed_by',
                            type: 'table_field',
                        },
                        {
                            field: 'opened_by',
                            type: 'table_field',
                        },
                        {
                            field: 'sys_updated_by',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Request Data',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'formatter',
                            formatterName: 'com_glideapp_questionset_default_question_editor.xml',
                            formatterRef: 'e8fac3081b2c4e106962fe60cd4bcb91',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Audit Log',
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
    ],
})
