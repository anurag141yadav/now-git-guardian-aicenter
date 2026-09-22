import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['288523a31b1cca106962fe60cd4bcb8f'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'is_deleted=false^EQ',
        hint: 'Access Levels',
        link_type: 'LIST',
        mobile_title: 'Access Levels ( Roles )',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_access_level',
        order: 140,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.access_reviewer',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.review_admin',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Access Levels',
        uncancelable: false,
    },
})
