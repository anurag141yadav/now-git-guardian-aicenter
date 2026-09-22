import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['45dde81f2bf85210d4dffd74ce91bf4a'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'LIST',
        mobile_title: 'Watch List',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_visitor_watch_list',
        order: 830,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.lobby_admin',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Watch List',
        uncancelable: false,
    },
})
