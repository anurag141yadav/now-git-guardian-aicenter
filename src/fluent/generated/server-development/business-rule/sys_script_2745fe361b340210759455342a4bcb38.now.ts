import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['2745fe361b340210759455342a4bcb38'],
    name: 'Trigger Access Prov Action',
    table: 'x_aleen_snguardian_identity_access',
    when: 'before',
    action: ['update', 'insert'],
    condition:
        "current.provisioning_action.code != 'DELETE' && current.provisioning_action.code != 'NONE'  && current.provisioning_action != null",
    filterCondition: 'provisioning_actionISNOTEMPTY^EQ',
    script: Now.include('./sys_script_2745fe361b340210759455342a4bcb38.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
