import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8063fd8247312250f487c24fe16d43fd'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian  non-Admin-BO-LA',
        role: '',
        script: "answer = !(gs.hasRole('x_aleen_snguardian.admin') || gs.hasRole('x_aleen_snguardian.badging_officer') || gs.hasRole('x_aleen_snguardian.lobby_admin'));",
        short_description: 'Guardian  non-Admin-BO-LA',
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
