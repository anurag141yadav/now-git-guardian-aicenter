import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['607f04da1bc60a106962fe60cd4bcbd3'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_access_requisite',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['a23470d61b8a0a106962fe60cd4bcbbe'],
    table: 'sys_ui_element',
    data: {
        element: 'access_level',
        position: 0,
        sys_ui_section: '607f04da1bc60a106962fe60cd4bcbd3',
    },
})
Record({
    $id: Now.ID['aa3470d61b8a0a106962fe60cd4bcbbe'],
    table: 'sys_ui_element',
    data: {
        element: 'assertion',
        position: 1,
        sys_ui_section: '607f04da1bc60a106962fe60cd4bcbd3',
    },
})
Record({
    $id: Now.ID['ae3470d61b8a0a106962fe60cd4bcbbe'],
    table: 'sys_ui_element',
    data: {
        element: 'enforcement_type',
        position: 2,
        sys_ui_section: '607f04da1bc60a106962fe60cd4bcbd3',
    },
})
