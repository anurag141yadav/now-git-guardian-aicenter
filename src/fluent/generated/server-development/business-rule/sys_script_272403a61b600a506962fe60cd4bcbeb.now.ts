import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['272403a61b600a506962fe60cd4bcbeb'],
    name: 'On Hire New Employee in HRMS',
    table: 'sys_user',
    active: false,
    when: 'after',
    action: ['insert'],
    script: Now.include('./sys_script_272403a61b600a506962fe60cd4bcbeb.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
