import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['343ab1d21b214a50759455342a4bcbf6'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_asset_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-access-reviewer-workspace-0',
    },
})
Record({
    $id: Now.ID['c93ab1d21b214a50759455342a4bcbf7'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '343ab1d21b214a50759455342a4bcbf6',
    },
})
Record({
    $id: Now.ID['cd3ab1d21b214a50759455342a4bcbf7'],
    table: 'sys_ui_element',
    data: {
        element: 'asset',
        position: 1,
        sys_ui_section: '343ab1d21b214a50759455342a4bcbf6',
    },
})
Record({
    $id: Now.ID['c13ab1d21b214a50759455342a4bcbf8'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 2,
        sys_ui_section: '343ab1d21b214a50759455342a4bcbf6',
    },
})
Record({
    $id: Now.ID['c53ab1d21b214a50759455342a4bcbf8'],
    table: 'sys_ui_element',
    data: {
        element: 'building',
        position: 3,
        sys_ui_section: '343ab1d21b214a50759455342a4bcbf6',
    },
})
