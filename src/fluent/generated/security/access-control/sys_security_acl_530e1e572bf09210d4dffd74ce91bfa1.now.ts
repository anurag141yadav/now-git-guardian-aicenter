import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['530e1e572bf09210d4dffd74ce91bfa1'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
})
