import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['92cc2a9e2bbeda50d4dffd74ce91bf2e'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor_watch_list, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_watch_list',
})
