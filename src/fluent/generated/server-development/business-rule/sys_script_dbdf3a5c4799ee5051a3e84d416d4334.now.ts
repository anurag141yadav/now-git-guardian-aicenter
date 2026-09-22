import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['dbdf3a5c4799ee5051a3e84d416d4334'],
    name: 'Update Group Visit children',
    table: 'x_aleen_snguardian_visitor_visit',
    when: 'after',
    action: ['update', 'insert'],
    condition: 'current.check_in_check_out_as_a_group == false',
    filterCondition:
        'type=9f4f79992b191a10d4dffd74ce91bfff^check_in_check_out_as_a_group=false^status!=8cf34e804755ae5051a3e84d416d43d2^status!=d7148acc4715ae5051a3e84d416d4322^EQ',
    script: Now.include('./sys_script_dbdf3a5c4799ee5051a3e84d416d4334.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
