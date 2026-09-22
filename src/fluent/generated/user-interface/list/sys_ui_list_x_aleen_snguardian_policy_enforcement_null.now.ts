import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_policy_enforcement',
    view: default_view,
    columns: ['number', 'eval_strategy', 'policy', 'send_notification', 'trigger', 'trigger_source'],
})
