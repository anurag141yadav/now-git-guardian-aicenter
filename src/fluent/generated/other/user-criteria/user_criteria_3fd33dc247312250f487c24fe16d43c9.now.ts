import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3fd33dc247312250f487c24fe16d43c9'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian non-PortalUser',
        role: '',
        script: "answer = (!gs.hasRole('x_aleen_snguardian.portal')) || (gs.hasRole('x_aleen_snguardian.portal') && gs.hasRole('x_aleen_snguardian.admin'));",
        short_description: "Users without 'x_aleen_snguardian.portal' Role",
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
