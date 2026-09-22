import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fc5373ca477d2e5051a3e84d416d4343'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian Non-LA',
        role: '',
        script: "answer = !gs.hasRole('x_aleen_snguardian.lobby_admin');",
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
})
