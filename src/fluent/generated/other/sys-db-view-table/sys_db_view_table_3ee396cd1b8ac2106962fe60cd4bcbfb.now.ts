import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3ee396cd1b8ac2106962fe60cd4bcbfb'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'true',
        order: '100',
        table: 'x_aleen_snguardian_identity_access',
        variable_prefix: 'iaccess',
        view: '06121a8d1b8ac2106962fe60cd4bcb5b',
        where_clause: 'iaccess.identity = identity.sys_id',
    },
})
