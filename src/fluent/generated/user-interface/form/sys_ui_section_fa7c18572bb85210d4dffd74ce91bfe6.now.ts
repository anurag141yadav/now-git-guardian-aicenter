import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fa7c18572bb85210d4dffd74ce91bfe6'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_visitor_mt_visit_status',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['b549c91f2b7c5210d4dffd74ce91bf25'],
    table: 'sys_ui_element',
    data: {
        element: 'code',
        position: 0,
        sys_ui_section: 'fa7c18572bb85210d4dffd74ce91bfe6',
    },
})
Record({
    $id: Now.ID['3d49c91f2b7c5210d4dffd74ce91bf25'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 1,
        sys_ui_section: 'fa7c18572bb85210d4dffd74ce91bfe6',
    },
})
Record({
    $id: Now.ID['bd49c91f2b7c5210d4dffd74ce91bf25'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 2,
        sys_ui_section: 'fa7c18572bb85210d4dffd74ce91bfe6',
    },
})
