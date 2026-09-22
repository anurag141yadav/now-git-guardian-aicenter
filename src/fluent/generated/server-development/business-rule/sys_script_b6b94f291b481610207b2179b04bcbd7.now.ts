import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['b6b94f291b481610207b2179b04bcbd7'],
    name: 'Trigger Delete User Async',
    table: 'x_aleen_snguardian_identity_system',
    when: 'async',
    action: ['update'],
    condition:
        'current.provisioning_action != null && current.provisioning_action.code == \'DELETE\' && current.provisioning_action.code != "NONE"',
    filterCondition: 'provisioning_action.code=DELETE^provisioning_actionVALCHANGES^EQ',
    script: Now.include('./sys_script_b6b94f291b481610207b2179b04bcbd7.server.js'),
    priority: 200,
    $meta: {
        useEsLatest: true,
    },
})
