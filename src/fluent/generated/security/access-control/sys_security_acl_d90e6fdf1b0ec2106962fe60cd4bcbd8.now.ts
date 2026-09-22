import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d90e6fdf1b0ec2106962fe60cd4bcbd8'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_field_mapping_type',
})
