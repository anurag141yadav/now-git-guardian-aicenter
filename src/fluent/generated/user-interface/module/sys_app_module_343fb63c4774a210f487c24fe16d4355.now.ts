import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['343fb63c4774a210f487c24fe16d4355'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        hint: 'Badge Printing ➚',
        link_type: 'DIRECT',
        mobile_title: 'Bulk Badge Printing',
        mobile_view_name: 'Mobile',
        order: 116,
        override_menu_roles: false,
        query: 'esc?id=alert_bulk_print_page',
        require_confirmation: true,
        roles: ['x_aleen_snguardian.admin', 'x_aleen_snguardian.badging_officer'],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Badge Printing ➚',
        uncancelable: false,
        window_name: '_blank',
    },
})
