import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['266ebf4a47f8e210f487c24fe16d4360'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'Badge Admin Center',
        link_type: 'SEPARATOR',
        mobile_title: 'Badge Admin Center',
        mobile_view_name: 'Mobile',
        order: 113,
        override_menu_roles: false,
        require_confirmation: true,
        roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.admin', 'x_aleen_snguardian.manager'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Badge Admin Center',
        uncancelable: false,
    },
})
