import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['14a57c3c1be5c6506962fe60cd4bcb04'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '8927f9381b14c6106962fe60cd4bcb18',
        filter: 'assigned_toLIKEjavascript:gs.getUserID()^NQdelegated_toLIKEjavascript:gs.getUserID()^EQ',
        hint: 'Access Reviews assigned to me',
        link_type: 'LIST',
        mobile_title: 'Assigned To Me',
        mobile_view_name: 'Mobile',
        name: 'x_aleen_snguardian_review_task',
        order: 60,
        override_menu_roles: false,
        require_confirmation: false,
        roles: [
            'x_aleen_snguardian.access_reviewer',
            'x_aleen_snguardian.review_admin',
            'x_aleen_snguardian.admin',
            'x_aleen_snguardian.manager',
            'x_aleen_snguardian.badging_officer',
        ],
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Assigned To Me',
        uncancelable: false,
    },
})
