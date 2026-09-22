import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['37dcfec71bfc42106962fe60cd4bcbf4'],
    name: 'Pre Validation on Identity Access',
    table: 'x_aleen_snguardian_identity_access',
    order: 10,
    when: 'before',
    action: ['insert'],
    condition: "current.provisioning_action.code == 'ADD'",
    filterCondition: 'provisioning_action=e77f8ed51bbc8210759455342a4bcb1a^EQ',
    script: Now.include('./sys_script_37dcfec71bfc42106962fe60cd4bcbf4.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
