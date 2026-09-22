import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f09a60c91b7402106962fe60cd4bcb17'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_request_activity_import_set',
})
