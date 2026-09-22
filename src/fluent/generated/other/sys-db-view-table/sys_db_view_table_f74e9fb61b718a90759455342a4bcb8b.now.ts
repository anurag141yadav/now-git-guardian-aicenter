import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f74e9fb61b718a90759455342a4bcb8b'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'false',
        order: '50',
        table: 'sysapproval_approver',
        variable_prefix: 'approval',
        view: 'f8ed1bb61b718a90759455342a4bcb0b',
        where_clause: "approval.source_table = 'x_aleen_snguardian_request'",
    },
})
