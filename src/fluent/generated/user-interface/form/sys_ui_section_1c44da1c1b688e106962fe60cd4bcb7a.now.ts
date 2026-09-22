import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['1c44da1c1b688e106962fe60cd4bcb7a'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_access_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-guardian-data-manager-workspace-0',
    },
})
Record({
    $id: Now.ID['90441e1c1b688e106962fe60cd4bcbb3'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '1c44da1c1b688e106962fe60cd4bcb7a',
    },
})
Record({
    $id: Now.ID['14441e1c1b688e106962fe60cd4bcbb3'],
    table: 'sys_ui_element',
    data: {
        element: 'access_level',
        position: 1,
        sys_ui_section: '1c44da1c1b688e106962fe60cd4bcb7a',
    },
})
Record({
    $id: Now.ID['94441e1c1b688e106962fe60cd4bcbb3'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 2,
        sys_ui_section: '1c44da1c1b688e106962fe60cd4bcb7a',
    },
})
