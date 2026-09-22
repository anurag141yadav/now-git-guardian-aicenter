import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bcd2a91b2b3e7210d4dffd74ce91bfef'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_mitigation',
})
