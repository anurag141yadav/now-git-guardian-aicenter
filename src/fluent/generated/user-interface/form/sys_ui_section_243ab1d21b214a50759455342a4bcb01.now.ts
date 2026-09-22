import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['243ab1d21b214a50759455342a4bcb01'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_access_owner',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-access-reviewer-workspace-0',
    },
})
Record({
    $id: Now.ID['e83ab1d21b214a50759455342a4bcb02'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '243ab1d21b214a50759455342a4bcb01',
    },
})
Record({
    $id: Now.ID['ec3ab1d21b214a50759455342a4bcb02'],
    table: 'sys_ui_element',
    data: {
        element: 'access_level',
        position: 1,
        sys_ui_section: '243ab1d21b214a50759455342a4bcb01',
    },
})
Record({
    $id: Now.ID['e03ab1d21b214a50759455342a4bcb03'],
    table: 'sys_ui_element',
    data: {
        element: 'owner',
        position: 2,
        sys_ui_section: '243ab1d21b214a50759455342a4bcb01',
    },
})
Record({
    $id: Now.ID['e43ab1d21b214a50759455342a4bcb03'],
    table: 'sys_ui_element',
    data: {
        element: 'type',
        position: 3,
        sys_ui_section: '243ab1d21b214a50759455342a4bcb01',
    },
})
