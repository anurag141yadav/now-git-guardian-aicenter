import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['e6f7b15933b99a10bf1221382e5c7b40'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_aleen_snguardian_visitor_visit',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: false,
        view: 'reschedule',
    },
})
Record({
    $id: Now.ID['dadd37da338eda10bf1221382e5c7b92'],
    table: 'sys_ui_element',
    data: {
        element: 'is_recurring',
        position: 0,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
    },
})
Record({
    $id: Now.ID['d2dd37da338eda10bf1221382e5c7b93'],
    table: 'sys_ui_element',
    data: {
        element: 'recurring_start_date',
        position: 1,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
    },
})
Record({
    $id: Now.ID['d6dd37da338eda10bf1221382e5c7b93'],
    table: 'sys_ui_element',
    data: {
        element: 'recurring_start_time',
        position: 2,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
    },
})
Record({
    $id: Now.ID['dadd37da338eda10bf1221382e5c7b93'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 3,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
        type: '.split',
    },
})
Record({
    $id: Now.ID['dedd37da338eda10bf1221382e5c7b93'],
    table: 'sys_ui_element',
    data: {
        element: 'is_all_day_event',
        position: 4,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
    },
})
Record({
    $id: Now.ID['d2dd37da338eda10bf1221382e5c7b94'],
    table: 'sys_ui_element',
    data: {
        element: 'recurring_end_date',
        position: 5,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
    },
})
Record({
    $id: Now.ID['d6dd37da338eda10bf1221382e5c7b94'],
    table: 'sys_ui_element',
    data: {
        element: 'recurring_end_time',
        position: 6,
        sys_ui_section: 'e6f7b15933b99a10bf1221382e5c7b40',
    },
})
