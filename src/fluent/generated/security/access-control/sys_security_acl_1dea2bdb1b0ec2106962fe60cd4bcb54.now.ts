import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1dea2bdb1b0ec2106962fe60cd4bcb54'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.badging_officer'],
    table: 'x_aleen_snguardian_identity_location',
})
