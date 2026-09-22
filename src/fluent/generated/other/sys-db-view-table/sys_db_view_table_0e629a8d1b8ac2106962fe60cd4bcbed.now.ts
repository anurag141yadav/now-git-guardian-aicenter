import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0e629a8d1b8ac2106962fe60cd4bcbed'],
    table: 'sys_db_view_table',
    data: {
        active: 'true',
        left_join: 'true',
        order: '100',
        table: 'x_aleen_snguardian_identity_asset',
        variable_prefix: 'iasset',
        view: '1dd1528d1b8ac2106962fe60cd4bcba4',
        where_clause: 'iasset.identity = identity.sys_id',
    },
})
