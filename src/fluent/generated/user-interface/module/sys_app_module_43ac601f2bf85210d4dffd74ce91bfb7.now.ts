import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['43ac601f2bf85210d4dffd74ce91bfb7'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'Visitor Management',
        link_type: 'SEPARATOR',
        mobile_title: 'Visitor Management',
        mobile_view_name: 'Mobile',
        order: 800,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.visitor',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.host',
            'x_aleen_snguardian.lobby_admin',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Visitor Management',
        uncancelable: false,
    },
})
