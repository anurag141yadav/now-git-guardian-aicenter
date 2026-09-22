import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['21ea2bdb1b0ec2106962fe60cd4bcb59'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_identity_location',
})
