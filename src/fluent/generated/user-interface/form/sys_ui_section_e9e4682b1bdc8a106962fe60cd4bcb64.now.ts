import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e9e4682b1bdc8a106962fe60cd4bcb64'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_request_status',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['b0eed09e1b0a0a106962fe60cd4bcbcb'],
    table: 'sys_ui_element',
    data: {
        element: 'code',
        position: 0,
        sys_ui_section: 'e9e4682b1bdc8a106962fe60cd4bcb64',
    },
})
Record({
    $id: Now.ID['b4eed09e1b0a0a106962fe60cd4bcbcb'],
    table: 'sys_ui_element',
    data: {
        element: 'description',
        position: 1,
        sys_ui_section: 'e9e4682b1bdc8a106962fe60cd4bcb64',
    },
})
Record({
    $id: Now.ID['b8eed09e1b0a0a106962fe60cd4bcbcb'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 2,
        sys_ui_section: 'e9e4682b1bdc8a106962fe60cd4bcb64',
        type: '.split',
    },
})
Record({
    $id: Now.ID['bceed09e1b0a0a106962fe60cd4bcbcb'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 3,
        sys_ui_section: 'e9e4682b1bdc8a106962fe60cd4bcb64',
    },
})
Record({
    $id: Now.ID['b0eed09e1b0a0a106962fe60cd4bcbcc'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 4,
        sys_ui_section: 'e9e4682b1bdc8a106962fe60cd4bcb64',
    },
})
