import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['9fbf34141b7c4a50759455342a4bcbe7'],
    name: 'Trigger System Prov Action',
    table: 'x_aleen_snguardian_identity_system',
    when: 'before',
    action: ['update', 'insert'],
    condition:
        'current.provisioning_action.code != \'DELETE\' && current.provisioning_action != null && current.provisioning_action.code != "NONE"',
    filterCondition: 'provisioning_actionISNOTEMPTY^EQ',
    script: Now.include('./sys_script_9fbf34141b7c4a50759455342a4bcbe7.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
