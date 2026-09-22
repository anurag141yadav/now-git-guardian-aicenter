import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['56bdbc2b1b60c650759455342a4bcbe7'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_access_level_import_set',
})
