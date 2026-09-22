import { Table, BooleanColumn, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor_notification = Table({
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'VISMAIL',
    },
    label: 'Visitor Notification',
    name: 'x_aleen_snguardian_visitor_notification',
    schema: {
        add_to_watchlist: BooleanColumn({
            default: false,
            label: 'Add to Watchlist',
            maxLength: 40,
        }),
        asset_collection: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        asset_notes: StringColumn({
            maxLength: 255,
        }),
        body: StringColumn({
            isFullUTF8: true,
            maxLength: 4000,
        }),
        checkout_type: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        include_host: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        include_security: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        location: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        status: StringColumn({
            default: 'NEW',
            maxLength: 40,
        }),
        subject: StringColumn({
            isFullUTF8: true,
            maxLength: 500,
        }),
        template: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_nda_email_templates',
        }),
        to: StringColumn({
            maxLength: 500,
        }),
        type: StringColumn({
            default: 'email',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        visit: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_visit',
        }),
    },
    createAccessControls: true,
})
