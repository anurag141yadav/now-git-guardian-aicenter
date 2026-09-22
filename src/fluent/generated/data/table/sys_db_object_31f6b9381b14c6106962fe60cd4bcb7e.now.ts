import { Table, ReferenceColumn, StringColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_request = Table({
    actions: {
        read: true,
        update: true,
        delete: true,
        create: true,
    },
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    audit: true,
    autoNumber: {
        prefix: 'REQUEST',
    },
    extends: 'task',
    extensible: true,
    label: 'Request',
    name: 'x_aleen_snguardian_request',
    schema: {
        request_for: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        request_type: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sc_cat_item_producer',
            referenceQual: 'sys_scope=6026f9b41b14c6106962fe60cd4bcb64^EQ',
            useReferenceQualifier: 'simple',
        }),
        stage: StringColumn({
            maxLength: 40,
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request_status',
        }),
        submitted_by: StringColumn({
            default: 'USER',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        sys_created_on: OverrideColumn({
            baseTable: 'task',
        }),
        number: OverrideColumn({
            baseTable: 'task',
        }),
    },
})
