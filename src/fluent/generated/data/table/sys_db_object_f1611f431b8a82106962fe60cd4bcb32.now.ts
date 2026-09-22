import { Table, StringColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_events_refined = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    label: 'Events Refined',
    name: 'x_aleen_snguardian_events_refined',
    schema: {
        access_level: StringColumn({
            label: 'Access level',
            maxLength: 40,
        }),
        asset: StringColumn({
            maxLength: 40,
        }),
        batch_id: StringColumn({
            maxLength: 40,
        }),
        category: StringColumn({
            maxLength: 40,
        }),
        event_date_time: DateTimeColumn({
            label: 'Event date time',
            maxLength: 40,
        }),
        identity: StringColumn({
            maxLength: 40,
        }),
        reader: StringColumn({
            maxLength: 40,
        }),
    },
})
