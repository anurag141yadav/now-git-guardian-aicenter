import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_rule_master_config',
    view: default_view,
    columns: ['number', 'name', 'code', 'rule'],
})
