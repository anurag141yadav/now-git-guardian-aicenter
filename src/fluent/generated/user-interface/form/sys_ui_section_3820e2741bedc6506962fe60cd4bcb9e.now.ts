import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3820e2741bedc6506962fe60cd4bcb9e'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_access_owner',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['13eb5c9a1b0a0a106962fe60cd4bcb1d'],
    table: 'sys_ui_element',
    data: {
        element: 'access_level',
        position: 0,
        sys_ui_section: '3820e2741bedc6506962fe60cd4bcb9e',
    },
})
Record({
    $id: Now.ID['17eb5c9a1b0a0a106962fe60cd4bcb1d'],
    table: 'sys_ui_element',
    data: {
        element: 'owner',
        position: 1,
        sys_ui_section: '3820e2741bedc6506962fe60cd4bcb9e',
    },
})
Record({
    $id: Now.ID['1beb5c9a1b0a0a106962fe60cd4bcb1d'],
    table: 'sys_ui_element',
    data: {
        element: 'type',
        position: 2,
        sys_ui_section: '3820e2741bedc6506962fe60cd4bcb9e',
    },
})
