import { Table, StringColumn, BooleanColumn, ListColumn, HtmlColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor_nda_email_templates = Table({
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
    display: 'name',
    label: 'NDA & Email Template',
    name: 'x_aleen_snguardian_visitor_nda_email_templates',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            maxLength: 40,
        }),
        location: ListColumn({
            maxLength: 1024,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        name: StringColumn({
            maxLength: 100,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        scope: ListColumn({
            maxLength: 4000,
        }),
        template: HtmlColumn({
            maxLength: 8000,
        }),
        type: StringColumn({
            default: 'EMAIL',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
    },
})
