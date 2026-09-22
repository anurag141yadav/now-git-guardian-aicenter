import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['359c136b1bd8ca106962fe60cd4bcb3c'],
    description:
        'Allow read for records in x_aleen_snguardian_badge_template, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_badge_template',
})
