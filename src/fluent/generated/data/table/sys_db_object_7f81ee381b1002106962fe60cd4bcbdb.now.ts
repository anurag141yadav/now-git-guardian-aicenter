import {
    Table,
    GenericColumn,
    TableNameColumn,
    DocumentIdColumn,
    StringColumn,
    BooleanColumn,
    ReferenceColumn,
    DateTimeColumn,
    Password2Column,
    SystemClassNameColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_identity = Table({
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
        prefix: 'IDENTITY',
    },
    display: 'full_name',
    extensible: true,
    label: [
        {
            label: 'Identity',
            plural: 'Identity',
        },
    ],
    name: 'x_aleen_snguardian_identity',
    schema: {
        additional_comments: GenericColumn({
            columnType: 'journal_input',
            maxLength: 4000,
        }),
        datasource_table: TableNameColumn({
            label: 'DataSource Table',
            maxLength: 64,
        }),
        datasource: DocumentIdColumn({
            dependent: 'datasource_table',
            label: 'DataSource',
            maxLength: 32,
            readOnly: true,
        }),
        department: StringColumn({
            maxLength: 40,
        }),
        email: StringColumn({
            maxLength: 40,
        }),
        first_name: StringColumn({
            maxLength: 40,
        }),
        full_name: StringColumn({
            maxLength: 100,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        journal: GenericColumn({
            columnType: 'journal',
            maxLength: 4000,
        }),
        last_name: StringColumn({
            maxLength: 40,
        }),
        manager: ReferenceColumn({
            maxLength: 32,
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        master_user_id: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        otp_expires_on: DateTimeColumn({
            label: 'OTP Expires On',
            maxLength: 40,
        }),
        otp: Password2Column({
            label: 'OTP',
            maxLength: 255,
        }),
        phone: StringColumn({
            maxLength: 40,
        }),
        photo: GenericColumn({
            attributes: {
                ref_contributions: 'capture_image',
            },
            columnType: 'user_image',
            maxLength: 40,
        }),
        source_system_code: StringColumn({
            default: 'Service Now',
            maxLength: 40,
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEUSER^EQ',
            useReferenceQualifier: 'simple',
        }),
        sys_class_name: SystemClassNameColumn({
            default: 'javascript:current.getTableName();',
            label: 'Class',
            maxLength: 80,
        }),
        type: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identitytype',
        }),
        u_skip_propogation: StringColumn({
            default: 'FALSE',
            maxLength: 40,
        }),
        user_name: StringColumn({
            label: 'User ID',
            maxLength: 40,
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            maxLength: 4000,
        }),
    },
})
