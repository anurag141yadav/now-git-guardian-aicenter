import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_reader_access_levels',
    view: default_view,
    columns: ['access_levels', 'reader'],
})
