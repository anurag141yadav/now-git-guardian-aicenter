import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['cccfde1b1bc6c2106962fe60cd4bcbb6'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'SEPARATOR',
        mobile_title: 'Master Data',
        mobile_view_name: 'Mobile',
        order: 120,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.review_admin',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.access_reviewer',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Master Data',
        uncancelable: false,
    },
})
