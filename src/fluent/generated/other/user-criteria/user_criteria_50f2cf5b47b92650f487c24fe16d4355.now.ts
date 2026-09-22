import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['50f2cf5b47b92650f487c24fe16d4355'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian  non-Admin-BO-LA-Host',
        role: '',
        script: "answer = !(gs.hasRole('x_aleen_snguardian.admin') || gs.hasRole('x_aleen_snguardian.badging_officer') || gs.hasRole('x_aleen_snguardian.lobby_admin') || gs.hasRole('x_aleen_snguardian.host'));",
        short_description: 'Guardian  non-Admin-BO-LA-Host',
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
