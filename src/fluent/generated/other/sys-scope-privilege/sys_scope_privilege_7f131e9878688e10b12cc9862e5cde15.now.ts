import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['7f131e9878688e10b12cc9862e5cde15'],
    operation: 'execute',
    status: 'allowed',
    targetName: 'ManyToManyChecker',
    targetScope: 'global',
    targetType: 'sys_script_include',
})
