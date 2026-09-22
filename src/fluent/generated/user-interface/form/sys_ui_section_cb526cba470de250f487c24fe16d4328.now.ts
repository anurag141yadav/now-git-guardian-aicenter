import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['cb526cba470de250f487c24fe16d4328'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_risk_rule',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['c752a0fa470de250f487c24fe16d4317'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 0,
        sys_ui_section: 'cb526cba470de250f487c24fe16d4328',
    },
})
Record({
    $id: Now.ID['cf52a0fa470de250f487c24fe16d4317'],
    table: 'sys_ui_element',
    data: {
        element: 'description',
        position: 1,
        sys_ui_section: 'cb526cba470de250f487c24fe16d4328',
    },
})
Record({
    $id: Now.ID['c752a0fa470de250f487c24fe16d4318'],
    table: 'sys_ui_element',
    data: {
        element: 'evaluation_logic',
        position: 2,
        sys_ui_section: 'cb526cba470de250f487c24fe16d4328',
    },
})
Record({
    $id: Now.ID['cf52a0fa470de250f487c24fe16d4318'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 3,
        sys_ui_section: 'cb526cba470de250f487c24fe16d4328',
    },
})
Record({
    $id: Now.ID['c752a0fa470de250f487c24fe16d4319'],
    table: 'sys_ui_element',
    data: {
        element: 'post_eval_action',
        position: 4,
        sys_ui_section: 'cb526cba470de250f487c24fe16d4328',
    },
})
