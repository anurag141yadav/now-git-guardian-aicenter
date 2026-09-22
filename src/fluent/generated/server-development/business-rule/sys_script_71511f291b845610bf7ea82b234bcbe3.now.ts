import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['71511f291b845610bf7ea82b234bcbe3'],
    name: 'Trigger Delete Asset Async',
    table: 'x_aleen_snguardian_identity_asset',
    when: 'async',
    action: ['update'],
    condition:
        "current.provisioning_action.code == 'DELETE' && current.provisioning_action.code != 'NONE'  && current.provisioning_action != null",
    filterCondition: 'provisioning_action.code=DELETE^provisioning_actionVALCHANGES^EQ',
    script: Now.include('./sys_script_71511f291b845610bf7ea82b234bcbe3.server.js'),
    priority: 200,
    $meta: {
        useEsLatest: true,
    },
})
