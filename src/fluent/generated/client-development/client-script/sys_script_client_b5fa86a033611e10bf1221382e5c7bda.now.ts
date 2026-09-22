import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['b5fa86a033611e10bf1221382e5c7bda'],
    type: 'onChange',
    table: 'x_aleen_snguardian_visitor',
    isolateScript: true,
    script: Now.include('./sys_script_client_b5fa86a033611e10bf1221382e5c7bda.client.js'),
    name: 'Hide ID  Attributes if Visitor is VIP',
    description: 'Hide ID attributes if visitor is a VIP or GOVT Employee',
    uiType: 'all',
    field: 'visitor_type',
})
