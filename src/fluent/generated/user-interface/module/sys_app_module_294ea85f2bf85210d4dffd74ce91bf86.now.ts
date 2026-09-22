import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['294ea85f2bf85210d4dffd74ce91bf86'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'Visitor Management Config',
        link_type: 'SEPARATOR',
        mobile_title: 'VIM Settings',
        mobile_view_name: 'Mobile',
        order: 850,
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
        title: 'ViM Configuration',
        uncancelable: false,
    },
})
