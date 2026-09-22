import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_access_requisite',
    view: default_view,
    columns: ['number', 'access_level', 'assertion'],
})
