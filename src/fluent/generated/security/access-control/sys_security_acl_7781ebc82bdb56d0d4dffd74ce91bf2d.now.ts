import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7781ebc82bdb56d0d4dffd74ce91bf2d'],
    description:
        'Allow read for records in x_aleen_snguardian_badge_office, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_badge_office',
})
