import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f7b33d001ba44e106962fe60cd4bcbcd'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_access_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['28eb1c9a1b0a0a106962fe60cd4bcb48'],
    table: 'sys_ui_element',
    data: {
        element: 'access_level',
        position: 0,
        sys_ui_section: 'f7b33d001ba44e106962fe60cd4bcbcd',
    },
})
Record({
    $id: Now.ID['2ceb1c9a1b0a0a106962fe60cd4bcb48'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 1,
        sys_ui_section: 'f7b33d001ba44e106962fe60cd4bcbcd',
    },
})
Record({
    $id: Now.ID['008ce819476eea1051a3e84d416d43e8'],
    table: 'sys_ui_element',
    data: {
        element: 'is_default',
        position: 2,
        sys_ui_section: 'f7b33d001ba44e106962fe60cd4bcbcd',
    },
})
Record({
    $id: Now.ID['4c8c2c19476eea1051a3e84d416d432f'],
    table: 'sys_ui_element',
    data: {
        element: 'scope',
        position: 3,
        sys_ui_section: 'f7b33d001ba44e106962fe60cd4bcbcd',
    },
})
