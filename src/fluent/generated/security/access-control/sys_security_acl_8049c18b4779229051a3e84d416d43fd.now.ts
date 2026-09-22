import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8049c18b4779229051a3e84d416d43fd'],
    description:
        'Query Range is required for User to get Sys_User - customized roles - customized roles - customized roles',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'query_range',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_identity',
    field: 'master_user_id',
})
