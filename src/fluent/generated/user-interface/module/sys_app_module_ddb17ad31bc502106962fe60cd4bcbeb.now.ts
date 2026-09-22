import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ddb17ad31bc502106962fe60cd4bcbeb'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        link_type: 'SEPARATOR',
        mobile_title: 'Access Review',
        mobile_view_name: 'Mobile',
        order: 50,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.review_admin',
            'x_aleen_snguardian.access_reviewer',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.manager',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Access Review',
        uncancelable: false,
    },
})
