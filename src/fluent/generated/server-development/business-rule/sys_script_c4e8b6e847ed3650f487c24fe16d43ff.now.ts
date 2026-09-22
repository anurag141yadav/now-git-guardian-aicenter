import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['c4e8b6e847ed3650f487c24fe16d43ff'],
    name: 'Display Identity',
    table: 'x_aleen_snguardian_identity_asset',
    when: 'display',
    action: [],
    condition: 'current!=null',
    filterCondition: 'identityISNOTEMPTY^EQ',
    script: Now.include('./sys_script_c4e8b6e847ed3650f487c24fe16d43ff.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
