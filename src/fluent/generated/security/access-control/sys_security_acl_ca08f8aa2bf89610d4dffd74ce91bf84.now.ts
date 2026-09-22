import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ca08f8aa2bf89610d4dffd74ce91bf84'],
    localOrExisting: 'Local',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['x_aleen_snguardian.kiosk'],
    name: 'ClientServerRelay',
})
