import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5e3ab5d21b214a50759455342a4bcb1f'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_identity_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-access-reviewer-workspace-0',
    },
})
Record({
    $id: Now.ID['163ab5d21b214a50759455342a4bcb21'],
    table: 'sys_ui_element',
    data: {
        element: 'identity',
        position: 0,
        sys_ui_section: '5e3ab5d21b214a50759455342a4bcb1f',
    },
})
Record({
    $id: Now.ID['1a3ab5d21b214a50759455342a4bcb21'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 1,
        sys_ui_section: '5e3ab5d21b214a50759455342a4bcb1f',
    },
})
Record({
    $id: Now.ID['1e3ab5d21b214a50759455342a4bcb21'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 2,
        sys_ui_section: '5e3ab5d21b214a50759455342a4bcb1f',
    },
})
