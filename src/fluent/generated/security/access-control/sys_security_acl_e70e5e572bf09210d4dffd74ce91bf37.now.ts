import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e70e5e572bf09210d4dffd74ce91bf37'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
})
