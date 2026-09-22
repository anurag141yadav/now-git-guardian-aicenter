import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['16f7d89b2b695210d4dffd74ce91bfb4'],
    localOrExisting: 'Local',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['x_aleen_snguardian.visitor'],
    name: 'MRVS_util',
})
