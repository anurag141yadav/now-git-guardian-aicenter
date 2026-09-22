import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b27515bb33825250bf1221382e5c7bcc'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_rule_master_config',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['07d5dd7f33825250bf1221382e5c7b73'],
    table: 'sys_ui_element',
    data: {
        element: 'code',
        position: 0,
        sys_ui_section: 'b27515bb33825250bf1221382e5c7bcc',
    },
})
Record({
    $id: Now.ID['0bd5dd7f33825250bf1221382e5c7b73'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 1,
        sys_ui_section: 'b27515bb33825250bf1221382e5c7bcc',
    },
})
Record({
    $id: Now.ID['0fd5dd7f33825250bf1221382e5c7b73'],
    table: 'sys_ui_element',
    data: {
        element: 'rule',
        position: 2,
        sys_ui_section: 'b27515bb33825250bf1221382e5c7bcc',
    },
})
