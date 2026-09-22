import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_risk_rule',
    view: default_view,
    columns: ['number', 'name', 'description', 'evaluation_logic', 'post_eval_action'],
})
