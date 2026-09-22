import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['792d2c1f2bf85210d4dffd74ce91bf4e'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'Visitors',
        link_type: 'LIST',
        mobile_title: 'Visitors',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_visitor',
        order: 810,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.badging_officer',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.access_reviewer',
            'x_aleen_snguardian.lobby_admin',
            'x_aleen_snguardian.host',
            'x_aleen_snguardian.review_admin',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Visitors',
        uncancelable: false,
    },
})
