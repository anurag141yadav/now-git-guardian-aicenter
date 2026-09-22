import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['68cdfb0a47f8e210f487c24fe16d4316'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'My Mobile Credentials ➚',
        link_type: 'DIRECT',
        mobile_title: 'My Mobile Credentials',
        mobile_view_name: 'Mobile',
        order: 2,
        override_menu_roles: false,
        query: '/esc?id=alert_mobile_credential_provision',
        require_confirmation: true,
        roles: ['x_aleen_snguardian.visitor'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'My Mobile Credentials ➚',
        uncancelable: false,
        window_name: '_blank',
    },
})
