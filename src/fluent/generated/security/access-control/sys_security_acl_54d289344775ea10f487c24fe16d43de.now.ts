import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['54d289344775ea10f487c24fe16d43de'],
    description:
        'Allow read for records in x_aleen_snguardian_review_task, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_review_task',
})
