import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1d63a59b2b3e7210d4dffd74ce91bf1f'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk',
})
