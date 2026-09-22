import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['794ec4241bb8ce506962fe60cd4bcb96'],
    description:
        'Allow read for records in x_aleen_snguardian_u_request_activity_import_set, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_request_activity_import_set',
})
