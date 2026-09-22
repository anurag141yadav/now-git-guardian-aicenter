import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8a14f5c01ba44e106962fe60cd4bcba8'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_identity_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['c12082401be44e106962fe60cd4bcb75'],
    table: 'sys_ui_element',
    data: {
        element: 'identity',
        position: 0,
        sys_ui_section: '8a14f5c01ba44e106962fe60cd4bcba8',
    },
})
Record({
    $id: Now.ID['452082401be44e106962fe60cd4bcb75'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 1,
        sys_ui_section: '8a14f5c01ba44e106962fe60cd4bcba8',
    },
})
Record({
    $id: Now.ID['9ce00b4f1bfc42106962fe60cd4bcb20'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 2,
        sys_ui_section: '8a14f5c01ba44e106962fe60cd4bcba8',
    },
})
