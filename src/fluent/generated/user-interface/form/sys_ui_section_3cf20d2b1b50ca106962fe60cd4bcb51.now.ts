import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3cf20d2b1b50ca106962fe60cd4bcb51'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_provisioning_status',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['5b5e585e1b0a0a106962fe60cd4bcbf7'],
    table: 'sys_ui_element',
    data: {
        element: 'code',
        position: 0,
        sys_ui_section: '3cf20d2b1b50ca106962fe60cd4bcb51',
    },
})
Record({
    $id: Now.ID['5f5e585e1b0a0a106962fe60cd4bcbf7'],
    table: 'sys_ui_element',
    data: {
        element: 'description',
        position: 1,
        sys_ui_section: '3cf20d2b1b50ca106962fe60cd4bcb51',
    },
})
Record({
    $id: Now.ID['535e585e1b0a0a106962fe60cd4bcbf8'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 2,
        sys_ui_section: '3cf20d2b1b50ca106962fe60cd4bcb51',
        type: '.split',
    },
})
Record({
    $id: Now.ID['575e585e1b0a0a106962fe60cd4bcbf8'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 3,
        sys_ui_section: '3cf20d2b1b50ca106962fe60cd4bcb51',
    },
})
Record({
    $id: Now.ID['5b5e585e1b0a0a106962fe60cd4bcbf8'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 4,
        sys_ui_section: '3cf20d2b1b50ca106962fe60cd4bcb51',
    },
})
