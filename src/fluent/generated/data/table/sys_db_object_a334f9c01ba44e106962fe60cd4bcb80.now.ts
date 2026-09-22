import {
    Table,
    TableNameColumn,
    DocumentIdColumn,
    StringColumn,
    ReferenceColumn,
    BooleanColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_identity_system = Table({
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
    audit: true,
    autoNumber: {
        prefix: 'IDENTSYS',
    },
    display: 'identity',
    label: 'Identity System',
    name: 'x_aleen_snguardian_identity_system',
    schema: {
        datasource_table: TableNameColumn({
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            label: 'DataSource',
            maxLength: 32,
        }),
        identifier_type: StringColumn({
            default: 'PRIMARY',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        identifier: StringColumn({
            maxLength: 60,
        }),
        identity: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        provisioning_action: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQual: 'applicable_toLIKESYSTEM^EQ',
            useReferenceQualifier: 'simple',
        }),
        provisioning_message: StringColumn({
            isFullUTF8: true,
            maxLength: 300,
        }),
        provisioning_status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_provisioning_status',
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKESYSTEM^EQ',
            useReferenceQualifier: 'simple',
        }),
        system: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_system',
        }),
        valid_from: DateTimeColumn({
            label: 'valid From',
            maxLength: 40,
        }),
        valid_to: DateTimeColumn({
            maxLength: 40,
        }),
    },
})
