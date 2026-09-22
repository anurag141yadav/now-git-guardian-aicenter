import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9f8c22df47392650f487c24fe16d4342'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_request',
})
