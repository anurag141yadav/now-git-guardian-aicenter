import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9df70f4c47c3b21051a3e84d416d43ee'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: 'aef74b4c47c3b21051a3e84d416d4329',
        condition: 'u_table_name=x_aleen_snguardian_visitor_visit^u_roleLIKEhost^EQ',
        decision_table: '2e09e7bc2bf25650d4dffd74ce91bf27',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_2e09e7bc2bf25650d4dffd74ce91bf27',
        label: 'Alert Visitor Lobby Column Names by Role_300',
        marked_for_deletion: 'false',
        order: '300',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
