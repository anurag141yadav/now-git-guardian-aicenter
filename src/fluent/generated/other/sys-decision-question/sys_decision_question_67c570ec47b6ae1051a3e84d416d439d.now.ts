import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['67c570ec47b6ae1051a3e84d416d439d'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: '61ba3c2447f6ae1051a3e84d416d4376',
        condition: 'u_identity_type.code=TEMPWORKER^u_location.name=Global^EQ',
        decision_table: '7c998544470e621051a3e84d416d434f',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_7c998544470e621051a3e84d416d434f',
        label: 'Duplicate of Rehire Identity _100',
        marked_for_deletion: 'false',
        order: '100',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
