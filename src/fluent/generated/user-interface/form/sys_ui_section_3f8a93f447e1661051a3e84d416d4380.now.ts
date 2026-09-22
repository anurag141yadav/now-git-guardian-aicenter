import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3f8a93f447e1661051a3e84d416d4380'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_policy_enforcement',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['378a17f447e1661051a3e84d416d4361'],
    table: 'sys_ui_element',
    data: {
        element: '.begin_split',
        position: 0,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
        type: '.begin_split',
    },
})
Record({
    $id: Now.ID['b38a17f447e1661051a3e84d416d4362'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 1,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
    },
})
Record({
    $id: Now.ID['bb8a17f447e1661051a3e84d416d4362'],
    table: 'sys_ui_element',
    data: {
        element: 'eval_strategy',
        position: 2,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
    },
})
Record({
    $id: Now.ID['b38a17f447e1661051a3e84d416d4363'],
    table: 'sys_ui_element',
    data: {
        element: 'policy',
        position: 3,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
    },
})
Record({
    $id: Now.ID['bb8a17f447e1661051a3e84d416d4363'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 4,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
        type: '.split',
    },
})
Record({
    $id: Now.ID['b38a17f447e1661051a3e84d416d4364'],
    table: 'sys_ui_element',
    data: {
        element: 'send_notification',
        position: 5,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
    },
})
Record({
    $id: Now.ID['bb8a17f447e1661051a3e84d416d4364'],
    table: 'sys_ui_element',
    data: {
        element: 'trigger',
        position: 6,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
    },
})
Record({
    $id: Now.ID['b38a17f447e1661051a3e84d416d4365'],
    table: 'sys_ui_element',
    data: {
        element: '.end_split',
        position: 7,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
        type: '.end_split',
    },
})
Record({
    $id: Now.ID['bb8a17f447e1661051a3e84d416d4365'],
    table: 'sys_ui_element',
    data: {
        element: 'trigger_source',
        position: 8,
        sys_ui_section: '3f8a93f447e1661051a3e84d416d4380',
    },
})
