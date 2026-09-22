import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f1f0845f1b100a10759455342a4bcb6f'],
    description:
        'Allow read for records in x_aleen_snguardian_system, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_system',
})
