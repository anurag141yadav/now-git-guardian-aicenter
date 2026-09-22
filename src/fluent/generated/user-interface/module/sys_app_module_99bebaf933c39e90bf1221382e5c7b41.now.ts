import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['99bebaf933c39e90bf1221382e5c7b41'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'DIRECT',
        mobile_title: 'Privacy Policy',
        mobile_view_name: 'Mobile',
        order: 910,
        override_menu_roles: false,
        query: 'x_aleen_snguardian_PrivacyPolicy.do',
        require_confirmation: false,
        roles: ['x_aleen_snguardian.employee', 'x_aleen_snguardian.visitor'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'App Privacy Policy',
        uncancelable: false,
    },
})
