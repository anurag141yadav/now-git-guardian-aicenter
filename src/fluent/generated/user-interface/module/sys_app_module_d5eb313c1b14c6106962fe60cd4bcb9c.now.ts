import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d5eb313c1b14c6106962fe60cd4bcb9c'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORopened_byDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ',
        hint: 'My Request',
        link_type: 'LIST',
        mobile_title: 'My Request',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_request',
        order: 11,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.lobby_admin',
            'x_aleen_snguardian.host',
            'x_aleen_snguardian.access_reviewer',
            'x_aleen_snguardian.employee',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.review_admin',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'My Request',
        uncancelable: false,
    },
})
