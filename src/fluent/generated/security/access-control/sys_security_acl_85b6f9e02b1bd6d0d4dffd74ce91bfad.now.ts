import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['85b6f9e02b1bd6d0d4dffd74ce91bfad'],
    description:
        'Allow read for records in x_aleen_snguardian_identity_location, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_identity_location',
})
