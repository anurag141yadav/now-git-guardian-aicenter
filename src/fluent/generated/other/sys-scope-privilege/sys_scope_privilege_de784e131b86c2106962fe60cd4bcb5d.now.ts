import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['de784e131b86c2106962fe60cd4bcb5d'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_security_acl_role',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
