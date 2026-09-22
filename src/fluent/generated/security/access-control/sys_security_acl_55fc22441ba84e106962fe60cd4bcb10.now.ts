import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['55fc22441ba84e106962fe60cd4bcb10'],
    description:
        'Allow read for records in x_aleen_snguardian_request_entity_action, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_request_entity_action',
})
