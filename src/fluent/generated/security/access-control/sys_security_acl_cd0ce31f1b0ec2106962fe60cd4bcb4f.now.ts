import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['cd0ce31f1b0ec2106962fe60cd4bcb4f'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_identity_attestation',
})
