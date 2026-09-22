import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7ac12ba215d1aa10c61703abfdedc7d1'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.admin'],
    name: 'x.aleen.risk-management-workspace.*',
})
