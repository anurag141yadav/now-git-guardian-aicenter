import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e680e3882b691a50d4dffd74ce91bfd1'],
    table: 'sys_decision_question',
    data: {
        active: 'true',
        answer: '0a80a3c82b691a50d4dffd74ce91bf2f',
        condition: 'u_identity_type.code=EMPLOYEE^EQ',
        decision_table: '3ecc17c02b691a50d4dffd74ce91bf40',
        default_answer: 'false',
        input_table: 'var__m_sys_decision_input_3ecc17c02b691a50d4dffd74ce91bf40',
        label: 'Identity Termination Provisioning Actions_100',
        marked_for_deletion: 'false',
        order: '100',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
