import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c8f8ba5f1bc502106962fe60cd4bcb90'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'LIST',
        mobile_title: 'All',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_review',
        order: 70,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.review_admin',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'All',
        uncancelable: false,
    },
})
