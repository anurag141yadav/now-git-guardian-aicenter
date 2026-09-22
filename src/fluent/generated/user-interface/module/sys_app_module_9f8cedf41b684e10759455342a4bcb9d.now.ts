import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9f8cedf41b684e10759455342a4bcb9d'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'Badging office',
        link_type: 'LIST',
        mobile_title: 'Badging Office',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_badge_office',
        order: 152,
        override_menu_roles: false,
        require_confirmation: false,
        roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.manager', 'x_aleen_snguardian.admin'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Location Administrator',
        uncancelable: false,
    },
})
