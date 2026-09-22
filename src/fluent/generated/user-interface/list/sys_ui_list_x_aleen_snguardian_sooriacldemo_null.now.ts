import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_sooriacldemo',
    view: default_view,
    columns: ['sys_created_on'],
})
