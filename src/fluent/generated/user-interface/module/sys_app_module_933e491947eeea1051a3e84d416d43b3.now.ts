import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['933e491947eeea1051a3e84d416d43b3'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'LIST',
        mobile_title: 'Provisioning Monitors',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_provisioning_monitor',
        order: 186,
        override_menu_roles: false,
        require_confirmation: true,
        roles: ['x_aleen_snguardian.manager', 'x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.admin'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Integration Monitor',
        uncancelable: false,
    },
})
