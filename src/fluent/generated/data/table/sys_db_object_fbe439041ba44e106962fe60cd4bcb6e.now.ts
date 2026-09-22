import {
    Table,
    ReferenceColumn,
    TableNameColumn,
    DocumentIdColumn,
    StringColumn,
    BooleanColumn,
    DateTimeColumn,
    ListColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_identity_access = Table({
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
        prefix: 'IDENTACCESS',
    },
    display: 'access_level',
    label: 'Identity Access',
    name: 'x_aleen_snguardian_identity_access',
    schema: {
        access_level: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_access_level',
        }),
        associated_asset: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset',
            referenceQual: 'javascript:new ConditionHelper().filterAssociatedAsset();',
        }),
        datasource_table: TableNameColumn({
            label: 'Datasource_Table',
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            maxLength: 32,
        }),
        delegated_to: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        identifier: StringColumn({
            maxLength: 120,
        }),
        identity: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQual: 'is_deleted=false^EQ',
            useReferenceQualifier: 'simple',
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        last_reviewed_by: ReferenceColumn({
            maxLength: 32,
            readOnly: true,
            referenceTable: 'sys_user',
        }),
        last_reviewed_on: DateTimeColumn({
            label: 'Last Reviewed',
            maxLength: 40,
            readOnly: true,
        }),
        last_used_on: DateTimeColumn({
            label: 'Last Used',
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
            referenceQual: 'applicable_toLIKEACCESS^EQ',
            useReferenceQualifier: 'simple',
        }),
        provisioning_message: StringColumn({
            isFullUTF8: true,
            maxLength: 300,
        }),
        provisioning_status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_provisioning_status',
            referenceQual: 'is_deleted=false^EQ',
            useReferenceQualifier: 'simple',
        }),
        review_action: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQual: 'applicable_toLIKEACCESSREVIEW^EQ',
            useReferenceQualifier: 'simple',
        }),
        review_assigned_to: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        review_log: GenericColumn({
            columnType: 'journal_input',
            maxLength: 4000,
        }),
        review_status: ReferenceColumn({
            maxLength: 40,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEREVIEW-RECORD^EQ',
            useReferenceQualifier: 'simple',
        }),
        review_task: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_review_task',
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEUSER-ACCESS^EQ',
            useReferenceQualifier: 'simple',
        }),
        valid_from: DateTimeColumn({
            maxLength: 40,
        }),
        valid_to: DateTimeColumn({
            maxLength: 40,
        }),
    },
})
