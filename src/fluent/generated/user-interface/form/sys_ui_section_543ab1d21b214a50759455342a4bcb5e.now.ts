import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['543ab1d21b214a50759455342a4bcb5e'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_access_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-access-reviewer-workspace-0',
    },
})
Record({
    $id: Now.ID['1c3ab1d21b214a50759455342a4bcb5f'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '543ab1d21b214a50759455342a4bcb5e',
    },
})
Record({
    $id: Now.ID['103ab1d21b214a50759455342a4bcb60'],
    table: 'sys_ui_element',
    data: {
        element: 'access_level',
        position: 1,
        sys_ui_section: '543ab1d21b214a50759455342a4bcb5e',
    },
})
Record({
    $id: Now.ID['143ab1d21b214a50759455342a4bcb60'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 2,
        sys_ui_section: '543ab1d21b214a50759455342a4bcb5e',
    },
})
