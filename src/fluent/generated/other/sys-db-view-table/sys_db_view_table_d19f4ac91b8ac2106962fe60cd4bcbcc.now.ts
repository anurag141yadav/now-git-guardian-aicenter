import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d19f4ac91b8ac2106962fe60cd4bcbcc'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'true',
        order: '100',
        table: 'x_aleen_snguardian_access_location',
        variable_prefix: 'al',
        view: 'cc2f42891b8ac2106962fe60cd4bcbd8',
        where_clause: 'al.access_level = acl.sys_id',
    },
})
