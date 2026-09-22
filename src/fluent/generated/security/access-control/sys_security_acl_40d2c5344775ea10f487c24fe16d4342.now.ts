import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['40d2c5344775ea10f487c24fe16d4342'],
    description:
        'Allow read for records in x_aleen_snguardian_review, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_review',
})
