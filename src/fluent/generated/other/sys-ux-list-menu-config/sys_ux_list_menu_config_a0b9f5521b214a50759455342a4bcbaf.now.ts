import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['a0b9f5521b214a50759455342a4bcbaf'],
    name: 'Review Admin Workspace_menu_config',
    categories: [
        {
            $id: Now.ID['a8b9f5521b214a50759455342a4bcbe2'],
            title: 'Review Task',
            order: 200,
            lists: [
                {
                    $id: Now.ID['28b9f5521b214a50759455342a4bcbe4'],
                    applicabilities: [
                        {
                            $id: Now.ID['e8b9f5521b214a50759455342a4bcbe6'],
                            applicability: '54b9f5521b214a50759455342a4bcb76',
                            order: 100,
                        },
                    ],
                    columns: 'number,assigned_to,total_records,completed,pending,status',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_review_task',
                    title: 'All',
                },
            ],
        },
        {
            $id: Now.ID['ecb9f5521b214a50759455342a4bcbbd'],
            title: 'Review',
            lists: [
                {
                    $id: Now.ID['20b9f5521b214a50759455342a4bcbc1'],
                    applicabilities: [
                        {
                            $id: Now.ID['60b9f5521b214a50759455342a4bcbc7'],
                            applicability: '54b9f5521b214a50759455342a4bcb76',
                            order: 100,
                        },
                    ],
                    columns: 'number,type,criteria,start_date,due_date,status',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    liveUpdates: '',
                    order: 50,
                    table: 'x_aleen_snguardian_review',
                    title: 'All',
                },
            ],
        },
    ],
})
