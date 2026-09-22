import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['10e6a97847e7aad0f487c24fe16d43b6'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: '00f6ed7847e7aad0f487c24fe16d4318',
        condition: 'u_identity_type.code=TEMPWORKER^u_identity_location.name=Global^EQ',
        decision_table: 'e2e58540470e621051a3e84d416d4369',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_e2e58540470e621051a3e84d416d4369',
        label: 'Duplicate of Onboarding User _100',
        marked_for_deletion: 'false',
        order: '100',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
