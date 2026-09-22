import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['fae382952b75da10d4dffd74ce91bfbb'],
    localOrExisting: 'Local',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['x_aleen_snguardian.visitor'],
    name: 'VisitorClientScriptHelper',
})
