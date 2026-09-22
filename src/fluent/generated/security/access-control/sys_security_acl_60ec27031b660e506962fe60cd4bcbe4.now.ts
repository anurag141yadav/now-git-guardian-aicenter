import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['60ec27031b660e506962fe60cd4bcbe4'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_request',
})
