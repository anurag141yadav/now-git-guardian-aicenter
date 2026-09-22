import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['47fb98572bb85210d4dffd74ce91bfca'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.kiosk', 'x_aleen_snguardian.portal'],
    table: 'x_aleen_snguardian_visitor',
})
