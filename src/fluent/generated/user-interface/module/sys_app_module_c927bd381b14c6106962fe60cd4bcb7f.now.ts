import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c927bd381b14c6106962fe60cd4bcb7f'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'state=3^ORstate=4^ORstate=7^EQ',
        link_type: 'LIST',
        mobile_title: 'Closed',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_request',
        order: 30,
        override_menu_roles: false,
        query: 'active=false^EQ',
        require_confirmation: false,
        roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.admin', 'x_aleen_snguardian.manager'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Closed',
        uncancelable: false,
    },
})
