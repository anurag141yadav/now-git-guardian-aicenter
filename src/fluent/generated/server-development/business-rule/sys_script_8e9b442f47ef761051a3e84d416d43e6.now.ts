import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['8e9b442f47ef761051a3e84d416d43e6'],
    name: 'Delete Child Visits of Parent',
    table: 'x_aleen_snguardian_visitor_visit',
    when: 'before',
    action: ['delete'],
    filterCondition: 'type=9f4f79992b191a10d4dffd74ce91bfff^check_in_check_out_as_a_group=false^EQ',
    script: Now.include('./sys_script_8e9b442f47ef761051a3e84d416d43e6.server.js'),
    $meta: {
        useEsLatest: true,
    },
})
