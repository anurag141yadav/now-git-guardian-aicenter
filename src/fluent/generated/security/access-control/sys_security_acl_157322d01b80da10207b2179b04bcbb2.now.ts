import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['157322d01b80da10207b2179b04bcbb2'],
    description:
        'Allow read for records in x_aleen_snguardian_identity_access, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_identity_access',
})
