import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_asset_analytics_log',
    view: default_view,
    columns: ['number', 'asset', 'category', 'confidence_score', 'description', 'event_id', 'location', 'timestamp'],
})
