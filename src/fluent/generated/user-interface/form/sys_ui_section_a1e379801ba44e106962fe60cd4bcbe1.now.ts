import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a1e379801ba44e106962fe60cd4bcbe1'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_asset_location',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['185c14da1b0a0a106962fe60cd4bcb7b'],
    table: 'sys_ui_element',
    data: {
        element: 'asset',
        position: 0,
        sys_ui_section: 'a1e379801ba44e106962fe60cd4bcbe1',
    },
})
Record({
    $id: Now.ID['1c5c14da1b0a0a106962fe60cd4bcb7b'],
    table: 'sys_ui_element',
    data: {
        element: 'location',
        position: 1,
        sys_ui_section: 'a1e379801ba44e106962fe60cd4bcbe1',
    },
})
