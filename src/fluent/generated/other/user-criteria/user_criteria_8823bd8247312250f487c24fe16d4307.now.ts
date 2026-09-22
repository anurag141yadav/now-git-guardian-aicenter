import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8823bd8247312250f487c24fe16d4307'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian  non- Admin-BO-Host',
        role: '',
        script: "answer = !(gs.hasRole('x_aleen_snguardian.host')  || gs.hasRole('x_aleen_snguardian.admin') || gs.hasRole('x_aleen_snguardian.badging_officer'));",
        short_description: "Users with 'x_aleen_snguardian.host'  Role",
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
