import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['7893132d1b845610bf7ea82b234bcb4e'],
    name: 'Trigger Delete Access Async',
    table: 'x_aleen_snguardian_identity_access',
    order: 200,
    when: 'async',
    action: ['update'],
    condition:
        "current.provisioning_action != null && current.provisioning_action.code == 'DELETE' && current.provisioning_action.code != 'NONE'",
    filterCondition: 'provisioning_action.code=DELETE^provisioning_actionVALCHANGES^EQ',
    script: Now.include('./sys_script_7893132d1b845610bf7ea82b234bcb4e.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
