import { Table, StringColumn, BooleanColumn, FloatColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_location = Table({
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
        prefix: 'LOCATION',
    },
    display: 'name',
    label: 'Location',
    name: 'x_aleen_snguardian_location',
    schema: {
        code: StringColumn({
            maxLength: 40,
        }),
        country: StringColumn({
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        latitude: FloatColumn({
            maxLength: 20,
        }),
        longitude: FloatColumn({
            maxLength: 20,
        }),
        master_location: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'cmn_location',
        }),
        name: StringColumn({
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        parent: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        state: StringColumn({
            maxLength: 40,
        }),
        time_zone: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        type: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        zip: StringColumn({
            maxLength: 40,
        }),
    },
})
