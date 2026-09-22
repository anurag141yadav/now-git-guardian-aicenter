import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['76a7f2ed1bd18a106962fe60cd4bcbe2'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_security_acl',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
