import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['c223df661ba00a506962fe60cd4bcb69'],
    name: 'On Terminate Employee in HRMS',
    table: 'sys_user',
    active: false,
    when: 'after',
    action: ['update'],
    filterCondition: 'active=false^EQ',
    script: Now.include('./sys_script_c223df661ba00a506962fe60cd4bcb69.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
