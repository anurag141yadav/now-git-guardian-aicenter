import {
    Table,
    ReferenceColumn,
    TableNameColumn,
    DocumentIdColumn,
    StringColumn,
    BooleanColumn,
    DateTimeColumn,
    Password2Column,
    ListColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_identity_asset = Table({
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
        prefix: 'IDENTASSET',
    },
    display: 'asset',
    label: 'Identity Asset',
    name: 'x_aleen_snguardian_identity_asset',
    schema: {
        asset: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset',
            referenceQual: 'javascript:new ConditionHelper().filterAsset();',
        }),
        datasource_table: TableNameColumn({
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            label: 'DataSource',
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
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        is_replacement: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        issue_type: StringColumn({
            default: 'PLASTIC',
            dropdown: 'dropdown_without_none',
            maxLength: 40,
        }),
        last_reviewed_by: ReferenceColumn({
            label: 'Last Reviwed By',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        last_reviewed_on: DateTimeColumn({
            label: 'Last Reviewed',
            maxLength: 40,
        }),
        last_used_on: DateTimeColumn({
            label: 'Last Used',
            maxLength: 40,
        }),
        manual_activation: BooleanColumn({
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
        pin: Password2Column({
            label: 'PIN',
            maxLength: 255,
        }),
        provisioning_action: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_request_entity_action',
            referenceQual: 'applicable_toLIKEASSET^EQ',
            useReferenceQualifier: 'simple',
        }),
        provisioning_message: StringColumn({
            maxLength: 300,
        }),
        provisioning_status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_provisioning_status',
        }),
        replace_asset: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_asset',
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
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_status_code',
        }),
        review_task: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_review_task',
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEUSER-ASSET^EQ',
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
