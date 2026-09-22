import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['adce5bb61b718a90759455342a4bcb30'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'false',
        order: '100',
        table: 'x_aleen_snguardian_request',
        variable_prefix: 'req',
        view: 'f8ed1bb61b718a90759455342a4bcb0b',
        where_clause: 'req.sys_id= approval.document_id',
    },
})
