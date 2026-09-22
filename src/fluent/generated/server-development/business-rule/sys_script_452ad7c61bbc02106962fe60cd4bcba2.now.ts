import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['452ad7c61bbc02106962fe60cd4bcba2'],
    name: 'Pre Validation of Identity Asset',
    table: 'x_aleen_snguardian_identity_asset',
    order: 10,
    when: 'before',
    action: ['insert'],
    condition: "current.provisioning_action.code == 'ADD'",
    filterCondition: 'provisioning_action=e77f8ed51bbc8210759455342a4bcb1a^EQ',
    script: Now.include('./sys_script_452ad7c61bbc02106962fe60cd4bcba2.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
