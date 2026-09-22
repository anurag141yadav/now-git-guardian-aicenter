import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['b7ee39a433211e10bf1221382e5c7bc1'],
    name: 'Visitor Creation',
    table: 'x_aleen_snguardian_visitor',
    when: 'before',
    action: ['insert'],
    script: Now.include('./sys_script_b7ee39a433211e10bf1221382e5c7bc1.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
