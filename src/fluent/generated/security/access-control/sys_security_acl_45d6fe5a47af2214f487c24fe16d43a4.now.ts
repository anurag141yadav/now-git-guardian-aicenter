import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['45d6fe5a47af2214f487c24fe16d43a4'],
    description: 'Query Range for Location Access -> Access Level - customized roles',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'query_range',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_access_location',
    field: 'access_level',
})
