import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ec26b0834708aa1051a3e84d416d43ec'],
    description:
        'Allow create for records in x_aleen_snguardian_u_event__import_set, for users with role x_aleen_snguardian.admin.',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_event__import_set',
})
