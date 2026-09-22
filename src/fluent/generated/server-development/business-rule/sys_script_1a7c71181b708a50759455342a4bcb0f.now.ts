import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['1a7c71181b708a50759455342a4bcb0f'],
    name: 'Trigger Asset Prov Action',
    table: 'x_aleen_snguardian_identity_asset',
    when: 'before',
    action: ['update', 'insert'],
    condition:
        "current.provisioning_action.code != 'DELETE' && current.provisioning_action.code != 'NONE'  && current.provisioning_action != null",
    filterCondition: 'provisioning_actionISNOTEMPTY^EQ',
    script: Now.include('./sys_script_1a7c71181b708a50759455342a4bcb0f.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
