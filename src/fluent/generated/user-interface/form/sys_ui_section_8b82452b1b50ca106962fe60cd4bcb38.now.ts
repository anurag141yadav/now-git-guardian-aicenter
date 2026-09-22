import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8b82452b1b50ca106962fe60cd4bcb38'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_system_feature',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['494f989e1b0a0a106962fe60cd4bcb9e'],
    table: 'sys_ui_element',
    data: {
        element: 'code',
        position: 0,
        sys_ui_section: '8b82452b1b50ca106962fe60cd4bcb38',
    },
})
Record({
    $id: Now.ID['4d4f989e1b0a0a106962fe60cd4bcb9e'],
    table: 'sys_ui_element',
    data: {
        element: 'description',
        position: 1,
        sys_ui_section: '8b82452b1b50ca106962fe60cd4bcb38',
    },
})
Record({
    $id: Now.ID['414f989e1b0a0a106962fe60cd4bcb9f'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 2,
        sys_ui_section: '8b82452b1b50ca106962fe60cd4bcb38',
        type: '.split',
    },
})
Record({
    $id: Now.ID['454f989e1b0a0a106962fe60cd4bcb9f'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 3,
        sys_ui_section: '8b82452b1b50ca106962fe60cd4bcb38',
    },
})
Record({
    $id: Now.ID['494f989e1b0a0a106962fe60cd4bcb9f'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 4,
        sys_ui_section: '8b82452b1b50ca106962fe60cd4bcb38',
    },
})
