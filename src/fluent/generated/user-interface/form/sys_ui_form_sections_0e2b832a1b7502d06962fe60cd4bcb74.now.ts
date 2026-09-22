import { Form } from '@servicenow/sdk/core'

Form({
    table: 'x_aleen_snguardian_asset',
    view: 'workspace-guardian-badge-office-workspace-0',
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'number',
                            type: 'table_field',
                        },
                        {
                            field: 'serial',
                            type: 'table_field',
                        },
                        {
                            field: 'type',
                            type: 'table_field',
                        },
                        {
                            field: 'system',
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
                            field: 'work_notes',
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
