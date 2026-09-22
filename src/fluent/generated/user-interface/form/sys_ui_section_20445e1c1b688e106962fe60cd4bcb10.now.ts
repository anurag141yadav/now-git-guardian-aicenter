import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['20445e1c1b688e106962fe60cd4bcb10'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_badge_template',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-guardian-data-manager-workspace-0',
    },
})
Record({
    $id: Now.ID['e4445e1c1b688e106962fe60cd4bcb11'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 0,
        sys_ui_section: '20445e1c1b688e106962fe60cd4bcb10',
    },
})
Record({
    $id: Now.ID['68445e1c1b688e106962fe60cd4bcb11'],
    table: 'sys_ui_element',
    data: {
        element: 'front',
        position: 1,
        sys_ui_section: '20445e1c1b688e106962fe60cd4bcb10',
    },
})
Record({
    $id: Now.ID['e8445e1c1b688e106962fe60cd4bcb11'],
    table: 'sys_ui_element',
    data: {
        element: 'back',
        position: 2,
        sys_ui_section: '20445e1c1b688e106962fe60cd4bcb10',
    },
})
Record({
    $id: Now.ID['6c445e1c1b688e106962fe60cd4bcb11'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 3,
        sys_ui_section: '20445e1c1b688e106962fe60cd4bcb10',
    },
})
