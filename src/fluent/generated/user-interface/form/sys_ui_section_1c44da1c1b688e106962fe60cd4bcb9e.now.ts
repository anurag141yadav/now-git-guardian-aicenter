import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['1c44da1c1b688e106962fe60cd4bcb9e'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_asset_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-guardian-data-manager-workspace-0',
    },
})
Record({
    $id: Now.ID['d044da1c1b688e106962fe60cd4bcba0'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '1c44da1c1b688e106962fe60cd4bcb9e',
    },
})
Record({
    $id: Now.ID['5444da1c1b688e106962fe60cd4bcba0'],
    table: 'sys_ui_element',
    data: {
        element: 'asset',
        position: 1,
        sys_ui_section: '1c44da1c1b688e106962fe60cd4bcb9e',
    },
})
Record({
    $id: Now.ID['d444da1c1b688e106962fe60cd4bcba0'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 2,
        sys_ui_section: '1c44da1c1b688e106962fe60cd4bcb9e',
    },
})
