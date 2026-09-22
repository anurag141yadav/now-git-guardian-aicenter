import { Table, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_access_owner = Table({
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
        prefix: 'ACCOWNER',
    },
    label: 'Access Owner',
    name: 'x_aleen_snguardian_access_owner',
    schema: {
        access_level: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_access_level',
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        owner: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQual: 'type=777f8ed51bbc8210759455342a4bcb58^master_user_idISNOTEMPTY^EQ',
            useReferenceQualifier: 'simple',
        }),
        type: StringColumn({
            default: 'OWNER',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
    },
})
