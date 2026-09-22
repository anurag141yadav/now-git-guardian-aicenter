import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d0f70a571b0502106962fe60cd4bcbe8'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_reader_access_levels',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['07e77aaeeb87c2500326f284dad0cd2b'],
    table: 'sys_ui_element',
    data: {
        element: 'reader',
        position: 0,
        sys_ui_section: 'd0f70a571b0502106962fe60cd4bcbe8',
    },
})
Record({
    $id: Now.ID['03e77aaeeb87c2500326f284dad0cd2c'],
    table: 'sys_ui_element',
    data: {
        element: 'access_levels',
        position: 1,
        sys_ui_section: 'd0f70a571b0502106962fe60cd4bcbe8',
    },
})
