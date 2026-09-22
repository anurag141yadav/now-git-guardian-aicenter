import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8dfaabbc2bf25650d4dffd74ce91bf2c'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: 'e0fa2f302b365650d4dffd74ce91bf89',
        condition: 'u_role=admin^u_table_name=x_aleen_snguardian_visitor_visit^EQ',
        decision_table: '2e09e7bc2bf25650d4dffd74ce91bf27',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_2e09e7bc2bf25650d4dffd74ce91bf27',
        label: 'Alert Visitor Lobby Column Names by Role_100',
        marked_for_deletion: 'false',
        order: '100',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
