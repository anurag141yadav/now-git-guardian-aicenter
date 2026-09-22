import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['11f8a2db47392650f487c24fe16d43bc'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian  non-Admin-BO-LA-Kiosk',
        role: '',
        script: "answer = !(gs.hasRole('x_aleen_snguardian.admin') || gs.hasRole('x_aleen_snguardian.badging_officer') || gs.hasRole('x_aleen_snguardian.lobby_admin') || gs.hasRole('x_aleen_snguardian.kiosk'));",
        short_description: 'Guardian  non-Admin-BO-LA-Kiosk',
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
