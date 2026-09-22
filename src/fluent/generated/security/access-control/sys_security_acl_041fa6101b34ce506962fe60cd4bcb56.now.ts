import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['041fa6101b34ce506962fe60cd4bcb56'],
    localOrExisting: 'Local',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    name: 'IdentityClientScriptHelper',
})
