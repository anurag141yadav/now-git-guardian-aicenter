import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e3d0d8ff1b9cca106962fe60cd4bcbb2'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_system_owner',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['f120a8de1b0a0a106962fe60cd4bcb72'],
    table: 'sys_ui_element',
    data: {
        element: 'system',
        position: 0,
        sys_ui_section: 'e3d0d8ff1b9cca106962fe60cd4bcbb2',
    },
})
Record({
    $id: Now.ID['f520a8de1b0a0a106962fe60cd4bcb72'],
    table: 'sys_ui_element',
    data: {
        element: 'owner',
        position: 1,
        sys_ui_section: 'e3d0d8ff1b9cca106962fe60cd4bcbb2',
    },
})
