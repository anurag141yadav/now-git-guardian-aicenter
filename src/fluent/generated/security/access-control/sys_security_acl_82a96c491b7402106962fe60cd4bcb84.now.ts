import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['82a96c491b7402106962fe60cd4bcb84'],
    description:
        'Allow read for records in x_aleen_snguardian_field_mapping_type, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_field_mapping_type',
})
