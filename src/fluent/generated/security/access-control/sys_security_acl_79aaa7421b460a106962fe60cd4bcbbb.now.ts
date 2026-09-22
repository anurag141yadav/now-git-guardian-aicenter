import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['79aaa7421b460a106962fe60cd4bcbbb'],
    localOrExisting: 'Local',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['x_aleen_snguardian.employee'],
    name: 'ValueHelper',
})
