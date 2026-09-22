import { Table, ReferenceColumn, ListColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_access_requisite = Table({
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
        prefix: 'ACCREQUISITE',
    },
    label: 'Access Requisite',
    name: 'x_aleen_snguardian_access_requisite',
    schema: {
        access_level: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_access_level',
        }),
        assertion: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_assertion',
        }),
        enforcement_type: ListColumn({
            default: 'REACTIVE',
            maxLength: 4000,
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
