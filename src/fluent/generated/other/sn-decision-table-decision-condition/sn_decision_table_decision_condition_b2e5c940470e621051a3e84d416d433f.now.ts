import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b2e5c940470e621051a3e84d416d433f'],
    table: 'sn_decision_table_decision_condition',
    data: {
        decision_input: '6ae58540470e621051a3e84d416d436c',
        decision_table: 'e2e58540470e621051a3e84d416d4369',
        default_operator: '=',
        description: 'Check onboarded user type',
        field: 'u_identity_type.code',
        field_label: 'Identity Type > Code',
        field_parent_table: 'x_aleen_snguardian_identitytype',
        label: 'Type',
        order: '100',
        sys_domain: 'global',
        type: '747127c1bf3320001875647fcf0739e0',
    },
})
