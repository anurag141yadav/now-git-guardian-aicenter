import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_cardholders_without_badges_view',
    view: default_view,
    columns: [
        'iasset_asset',
        'iasset_datasource',
        'iasset_datasource_table',
        'iasset_identifier',
        'iasset_identity',
        'iasset_is_deleted',
        'iasset_is_replacement',
        'iasset_number',
        'iasset_pin',
        'iasset_provisioning_action',
    ],
})
