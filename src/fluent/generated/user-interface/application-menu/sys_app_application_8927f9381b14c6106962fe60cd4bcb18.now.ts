import { ApplicationMenu } from '@servicenow/sdk/core'

ApplicationMenu({
    $id: Now.ID['8927f9381b14c6106962fe60cd4bcb18'],
    title: 'Guardian',
    category: 'Custom Applications',
    hint: 'Guardian Application to manage Access Levels',
    description: 'Guardian Application to manage Access Levels',
    roles: [
        'x_aleen_snguardian.admin',
        'x_aleen_snguardian.employee',
        'x_aleen_snguardian.badging_officer',
        'x_aleen_snguardian.manager',
        'x_aleen_snguardian.Access Review Admin',
        'x_aleen_snguardian.Access Reviewer',
        'x_aleen_snguardian.lobby_admin',
        'x_aleen_snguardian.host',
    ],
})
