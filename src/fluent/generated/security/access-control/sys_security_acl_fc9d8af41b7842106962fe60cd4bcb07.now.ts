import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['fc9d8af41b7842106962fe60cd4bcb07'],
    description:
        'Allow read for records in x_aleen_snguardian_location, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_location',
})
