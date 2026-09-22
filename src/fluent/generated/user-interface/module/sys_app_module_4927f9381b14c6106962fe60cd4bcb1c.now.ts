import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['4927f9381b14c6106962fe60cd4bcb1c'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'SEPARATOR',
        mobile_title: 'Request',
        mobile_view_name: 'Mobile',
        order: 10,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.employee',
            'x_aleen_snguardian.host',
            'x_aleen_snguardian.lobby_admin',
            'x_aleen_snguardian.review_admin',
            'x_aleen_snguardian.access_reviewer',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Request',
        uncancelable: false,
    },
})
