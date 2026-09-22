import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6ca05c331bdcca106962fe60cd4bcb18'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_system_parameters',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['b98667c71b260e506962fe60cd4bcba2'],
    table: 'sys_ui_element',
    data: {
        element: 'type',
        position: 0,
        sys_ui_section: '6ca05c331bdcca106962fe60cd4bcb18',
    },
})
Record({
    $id: Now.ID['b18667c71b260e506962fe60cd4bcba3'],
    table: 'sys_ui_element',
    data: {
        element: 'property_name',
        position: 1,
        sys_ui_section: '6ca05c331bdcca106962fe60cd4bcb18',
    },
})
Record({
    $id: Now.ID['b58667c71b260e506962fe60cd4bcba3'],
    table: 'sys_ui_element',
    data: {
        element: 'property_value',
        position: 2,
        sys_ui_section: '6ca05c331bdcca106962fe60cd4bcb18',
    },
})
