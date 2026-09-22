import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['2494132a1ba00a506962fe60cd4bcbd8'],
    name: 'On Update Employee in HRMS',
    table: 'sys_user',
    active: false,
    when: 'after',
    action: ['update'],
    filterCondition: 'active=true^EQ',
    script: Now.include('./sys_script_2494132a1ba00a506962fe60cd4bcbd8.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
