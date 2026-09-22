import { Table, ReferenceColumn, StringColumn, FloatColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_asset_analytics_log = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'ASSAN',
    },
    label: 'Asset Analytics Log',
    name: 'x_aleen_snguardian_asset_analytics_log',
    schema: {
        asset: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset',
        }),
        category: StringColumn({
            maxLength: 40,
        }),
        confidence_score: FloatColumn({
            maxLength: 40,
        }),
        description: StringColumn({
            isFullUTF8: true,
            maxLength: 4000,
        }),
        event_id: StringColumn({
            maxLength: 40,
        }),
        location: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        timestamp: DateTimeColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
