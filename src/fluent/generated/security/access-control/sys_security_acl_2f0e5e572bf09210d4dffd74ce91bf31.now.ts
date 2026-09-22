import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2f0e5e572bf09210d4dffd74ce91bf31'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
})
