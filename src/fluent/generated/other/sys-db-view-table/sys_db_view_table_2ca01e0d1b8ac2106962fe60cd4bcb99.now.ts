import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2ca01e0d1b8ac2106962fe60cd4bcb99'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'true',
        order: '100',
        table: 'x_aleen_snguardian_identity_access',
        variable_prefix: 'ia',
        view: 'de60d20d1b8ac2106962fe60cd4bcbd8',
        where_clause: 'ia.access_level = acl.sys_id',
    },
})
