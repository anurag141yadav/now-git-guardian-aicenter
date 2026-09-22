import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['15d16fa247d1aa1051a3e84d416d43e3'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_risk_rule',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'workspace-risk-management-workspace-0',
    },
})
Record({
    $id: Now.ID['d9d16fa247d1aa1051a3e84d416d43e4'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: '15d16fa247d1aa1051a3e84d416d43e3',
    },
})
Record({
    $id: Now.ID['d1d16fa247d1aa1051a3e84d416d43e6'],
    table: 'sys_ui_element',
    data: {
        element: 'description',
        position: 1,
        sys_ui_section: '15d16fa247d1aa1051a3e84d416d43e3',
    },
})
Record({
    $id: Now.ID['d1d16fa247d1aa1051a3e84d416d43e5'],
    table: 'sys_ui_element',
    data: {
        element: 'evaluation_logic',
        position: 2,
        sys_ui_section: '15d16fa247d1aa1051a3e84d416d43e3',
    },
})
Record({
    $id: Now.ID['d9d16fa247d1aa1051a3e84d416d43e6'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 3,
        sys_ui_section: '15d16fa247d1aa1051a3e84d416d43e3',
    },
})
Record({
    $id: Now.ID['d9d16fa247d1aa1051a3e84d416d43e5'],
    table: 'sys_ui_element',
    data: {
        element: 'post_eval_action',
        position: 4,
        sys_ui_section: '15d16fa247d1aa1051a3e84d416d43e3',
    },
})
