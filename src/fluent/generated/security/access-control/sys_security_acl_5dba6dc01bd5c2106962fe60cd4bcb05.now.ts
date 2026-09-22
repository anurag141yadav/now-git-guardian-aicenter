import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5dba6dc01bd5c2106962fe60cd4bcb05'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_review',
})
