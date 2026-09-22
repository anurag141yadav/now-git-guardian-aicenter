import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['23a935044702a21051a3e84d416d4336'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: 'afa935044702a21051a3e84d416d4332',
        condition: 'u_location=66f28b2147f4621051a3e84d416d43c1^u_checkout_type!=final^u_typeLIKEcheckout^EQ',
        decision_table: 'd7a97dc04702a21051a3e84d416d43ee',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_d7a97dc04702a21051a3e84d416d43ee',
        label: 'Alert Visitor Default Notification Templates V2_800',
        marked_for_deletion: 'false',
        order: '800',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
