import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['a35414012bf01210d4dffd74ce91bf54'],
    name: 'Pre validation of Badge Roles System',
    table: 'x_aleen_snguardian_identity_access',
    order: 15,
    when: 'before',
    action: ['update', 'insert'],
    condition: "current.provisioning_action.code == 'ADD'",
    filterCondition: 'provisioning_action=e77f8ed51bbc8210759455342a4bcb1a^EQ',
    script: Now.include('./sys_script_a35414012bf01210d4dffd74ce91bf54.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
