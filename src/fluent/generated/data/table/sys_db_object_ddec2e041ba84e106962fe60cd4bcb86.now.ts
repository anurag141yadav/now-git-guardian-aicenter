import { Table, ListColumn, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_request_entity_action = Table({
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
    autoNumber: {
        number: 1,
        numberOfDigits: 2,
        prefix: 'REQENTACT',
    },
    label: 'Request Entity Action',
    name: 'x_aleen_snguardian_request_entity_action',
    schema: {
        applicable_to: ListColumn({
            maxLength: 4000,
        }),
        code: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            maxLength: 40,
        }),
        name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
    },
})
