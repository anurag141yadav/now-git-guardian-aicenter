import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['579325c247fdee10f487c24fe16d43d0'],
    table: 'user_criteria',
    data: {
        active: true,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian  non -Admin-BO',
        role: '',
        script: "answer = !(gs.hasRole('x_aleen_snguardian.badging_officer'));",
        short_description: 'Not a Admin , not a badging officer',
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
    $meta: {
        useEsLatest: true,
    },
})
