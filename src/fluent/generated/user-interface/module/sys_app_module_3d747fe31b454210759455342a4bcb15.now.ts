import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3d747fe31b454210759455342a4bcb15'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'parentISNOTEMPTY^is_deleted=false^EQ',
        hint: 'Guardian Location',
        link_type: 'LIST',
        map_page: 'e01f77e81b794290759455342a4bcbda',
        mobile_title: 'Location',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_location',
        order: 130,
        override_menu_roles: false,
        query: '^ORDERBYtype^ORDERBYcountry^ORDERBYname^GROUPBYparent',
        require_confirmation: false,
        roles: ['x_aleen_snguardian.manager', 'x_aleen_snguardian.admin', 'x_aleen_snguardian.badging_officer'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Locations',
        uncancelable: false,
    },
})
