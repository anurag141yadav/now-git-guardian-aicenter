import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['eb0e5e572bf09210d4dffd74ce91bf65'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor_nda_email_templates, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_nda_email_templates',
})
