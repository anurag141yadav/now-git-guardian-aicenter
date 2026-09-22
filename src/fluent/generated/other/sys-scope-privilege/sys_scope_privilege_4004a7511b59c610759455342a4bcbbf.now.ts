import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['4004a7511b59c610759455342a4bcbbf'],
    operation: 'read',
    status: 'allowed',
    targetName: 'sys_flow_context',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
