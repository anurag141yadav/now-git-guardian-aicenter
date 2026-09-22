import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['06bdbc2b1b60c650759455342a4bcbdf'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_access_level_import_set',
})
