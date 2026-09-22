import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6a80a3c82b691a50d4dffd74ce91bfe8'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: 'ce80a3c82b691a50d4dffd74ce91bf33',
        condition: 'u_identity_type.code=TEMPWORKER^EQ',
        decision_table: '3ecc17c02b691a50d4dffd74ce91bf40',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_3ecc17c02b691a50d4dffd74ce91bf40',
        label: 'Identity Termination Provisioning Actions_200',
        marked_for_deletion: 'false',
        order: '200',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
