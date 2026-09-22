import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['4927bd381b14c6106962fe60cd4bcb7d'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'LIST',
        mobile_title: 'Open - Unassigned',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_request',
        order: 25,
        override_menu_roles: false,
        query: 'active=true^assigned_toISEMPTY^stateNOT IN3,4,7^EQ',
        require_confirmation: false,
        roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.admin', 'x_aleen_snguardian.manager'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Open - Unassigned',
        uncancelable: false,
    },
})
