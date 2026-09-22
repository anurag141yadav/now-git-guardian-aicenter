import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['171149361bf68210207b2179b04bcbbd'],
    table: 'user_criteria',
    data: {
        active: false,
        advanced: true,
        company: '',
        department: '',
        group: '',
        location: '',
        match_all: false,
        name: 'Guardian non- Admin-BO-User',
        role: '',
        script: `if (gs.hasRole('x_aleen_snguardian.admin')) {
    answer = false;
} else {
    if (gs.hasRole('x_aleen_snguardian.access_reviewer') ||
        gs.hasRole('x_aleen_snguardian.review_admin') ||
        gs.hasRole('x_aleen_snguardian.host') ||
        gs.hasRole('x_aleen_snguardian.kiosk') ||
        gs.hasRole('x_aleen_snguardian.lobby_admin') ||
        gs.hasRole('x_aleen_snguardian.portal') ||
		(gs.hasRole('x_aleen_snguardian.manager') && !gs.hasRole('x_aleen_snguardian.badging_officer'))) {
        answer = true;
    } else {
       answer = false;
    }
}`,
        short_description: 'Guardian User or Admin or badging officer',
        sys_domain: 'global',
        sys_domain_path: '/',
        user: '',
    },
    $meta: {
        useEsLatest: true,
    },
})
