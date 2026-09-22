import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3cd52f631b1cca106962fe60cd4bcb07'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'is_deleted=false^EQ',
        hint: 'Badges',
        link_type: 'LIST',
        mobile_title: 'Assets ( Badges & More ..)',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_asset',
        order: 148,
        override_menu_roles: false,
        require_confirmation: false,
        roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.manager', 'x_aleen_snguardian.admin'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Assets (Badges)',
        uncancelable: false,
    },
})
