import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c2601cff1b9cca106962fe60cd4bcbdb'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_system_features',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['c8d6203f1b100e106962fe60cd4bcb5b'],
    table: 'sys_ui_element',
    data: {
        element: 'feature',
        position: 0,
        sys_ui_section: 'c2601cff1b9cca106962fe60cd4bcbdb',
    },
})
Record({
    $id: Now.ID['4cd6203f1b100e106962fe60cd4bcb5b'],
    table: 'sys_ui_element',
    data: {
        element: 'value',
        position: 1,
        sys_ui_section: 'c2601cff1b9cca106962fe60cd4bcbdb',
    },
})
Record({
    $id: Now.ID['4982ab3e1bcd42506962fe60cd4bcb86'],
    table: 'sys_ui_element',
    data: {
        element: 'u_is_deleted',
        position: 2,
        sys_ui_section: 'c2601cff1b9cca106962fe60cd4bcbdb',
    },
})
Record({
    $id: Now.ID['eb6da8851b489210bf7ea82b234bcb02'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 3,
        sys_ui_section: 'c2601cff1b9cca106962fe60cd4bcbdb',
    },
})
