import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3ee4606b1bdc8a106962fe60cd4bcb76'],
    description:
        'Allow read for records in x_aleen_snguardian_request_status, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_request_status',
})
