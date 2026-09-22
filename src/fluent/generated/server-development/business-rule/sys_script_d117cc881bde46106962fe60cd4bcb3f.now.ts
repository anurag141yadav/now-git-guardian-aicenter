import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['d117cc881bde46106962fe60cd4bcb3f'],
    name: 'Update Full Name',
    table: 'x_aleen_snguardian_identity',
    when: 'before',
    action: ['update', 'insert'],
    script: Now.include('./sys_script_d117cc881bde46106962fe60cd4bcb3f.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
