import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['223fda0647f12250f487c24fe16d4392'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian PortalUser',
        role: '',
        script: "answer = gs.hasRole('x_aleen_snguardian.portal');",
        short_description: 'x_aleen_snguardian.portal',
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
