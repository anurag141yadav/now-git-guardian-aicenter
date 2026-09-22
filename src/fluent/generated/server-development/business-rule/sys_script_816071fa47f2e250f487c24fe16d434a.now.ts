import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['816071fa47f2e250f487c24fe16d434a'],
    name: 'On Change Prov Monitor Record Status',
    table: 'x_aleen_snguardian_provisioning_monitor',
    when: 'async',
    action: ['update'],
    filterCondition: 'statusCHANGESTOPROCESSED^ORstatusCHANGESTOFAILED^EQ',
    script: Now.include('./sys_script_816071fa47f2e250f487c24fe16d434a.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
