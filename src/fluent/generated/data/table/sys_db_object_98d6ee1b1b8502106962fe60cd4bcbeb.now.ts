import { Table, StringColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_event = Table({
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
        numberOfDigits: 9,
        prefix: 'EVENT',
    },
    label: 'Event',
    name: 'x_aleen_snguardian_event',
    schema: {
        badge_id: StringColumn({
            maxLength: 40,
        }),
        event_date_time: DateTimeColumn({
            default: 'javascript: new GlideDateTime();',
            maxLength: 40,
        }),
        event_id: StringColumn({
            maxLength: 40,
        }),
        event_position: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        reader_id: StringColumn({
            maxLength: 40,
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        type: StringColumn({
            default: 'CHECKIN',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        user_id: StringColumn({
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
