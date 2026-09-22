import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['cfb134932b3c5210d4dffd74ce91bf26'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_visitor_status',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['f531c1172b7c5210d4dffd74ce91bf64'],
    table: 'sys_ui_element',
    data: {
        element: 'code',
        position: 0,
        sys_ui_section: 'cfb134932b3c5210d4dffd74ce91bf26',
    },
})
Record({
    $id: Now.ID['7931c1172b7c5210d4dffd74ce91bf64'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 1,
        sys_ui_section: 'cfb134932b3c5210d4dffd74ce91bf26',
    },
})
Record({
    $id: Now.ID['f931c1172b7c5210d4dffd74ce91bf64'],
    table: 'sys_ui_element',
    data: {
        element: 'is_deleted',
        position: 2,
        sys_ui_section: 'cfb134932b3c5210d4dffd74ce91bf26',
    },
})
