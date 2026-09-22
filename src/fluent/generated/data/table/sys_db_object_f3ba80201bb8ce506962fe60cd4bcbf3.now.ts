import { Table, StringColumn, TableNameColumn, DocumentIdColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_aleen_snguardian_request_activity = Table({
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
        prefix: 'REQACT',
    },
    label: 'Request Activity',
    name: 'x_aleen_snguardian_request_activity',
    schema: {
        activity: StringColumn({
            maxLength: 40,
        }),
        datasource_table: TableNameColumn({
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            maxLength: 32,
        }),
        description: StringColumn({
            isFullUTF8: true,
            maxLength: 100,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        provisioning_action: ReferenceColumn({
            label: 'Provisioning  Action',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request_entity_action',
        }),
        provisioning_status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_provisioning_status',
        }),
        request: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request',
        }),
    },
})
