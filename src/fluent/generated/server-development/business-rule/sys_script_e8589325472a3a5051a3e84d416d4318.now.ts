import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['e8589325472a3a5051a3e84d416d4318'],
    name: 'Update Group and child visit status',
    table: 'x_aleen_snguardian_visitor_request',
    when: 'after',
    action: ['update'],
    condition: 'current.visit.type.code=="GROUP"',
    filterCondition: 'visitISNOTEMPTY^EQ',
    script: Now.include('./sys_script_e8589325472a3a5051a3e84d416d4318.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
