import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0527f9381b14c6106962fe60cd4bcb21'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'state=1^EQ',
        link_type: 'LIST',
        mobile_title: 'Open',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_request',
        order: 20,
        override_menu_roles: false,
        query: 'active=true^EQ',
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.lobby_admin',
            'x_aleen_snguardian.access_reviewer',
            'x_aleen_snguardian.review_admin',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.admin',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Open',
        uncancelable: false,
    },
})
