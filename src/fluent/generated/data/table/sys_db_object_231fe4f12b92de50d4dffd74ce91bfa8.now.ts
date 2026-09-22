import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_timezone = Table({
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
        number: 0,
        numberOfDigits: 4,
        prefix: 'TZ',
    },
    label: 'TimeZone',
    name: 'x_aleen_snguardian_timezone',
    schema: {
        abbreviation: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
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
        offset: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            maxLength: 40,
        }),
    },
})
