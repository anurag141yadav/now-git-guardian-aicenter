import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['648495fb33825250bf1221382e5c7b9c'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'LIST',
        mobile_title: 'Rule Master Configs',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_rule_master_config',
        order: 876,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.lobby_admin',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Rule Master Configs',
        uncancelable: false,
    },
})
