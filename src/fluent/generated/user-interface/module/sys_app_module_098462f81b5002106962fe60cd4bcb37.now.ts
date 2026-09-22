import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['098462f81b5002106962fe60cd4bcb37'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'type.codeNOT LIKEVIS^EQ',
        hint: 'Cardholders',
        link_type: 'LIST',
        mobile_title: 'Cardholders (Users)',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_identity',
        order: 110,
        override_menu_roles: false,
        require_confirmation: false,
        roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.manager', 'x_aleen_snguardian.admin'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Cardholders',
        uncancelable: false,
    },
})
