import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bd704c3c1b794290759455342a4bcb2c'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'true',
        order: '110',
        table: 'x_aleen_snguardian_access_owner',
        variable_prefix: 'ao',
        view: '3510c43c1b794290759455342a4bcb90',
        where_clause: 'ao.access_level = acl.sys_id',
    },
})
