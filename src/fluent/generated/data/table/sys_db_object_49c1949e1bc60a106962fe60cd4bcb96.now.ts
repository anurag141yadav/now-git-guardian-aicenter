import {
    Table,
    ReferenceColumn,
    BooleanColumn,
    DateTimeColumn,
    StringColumn,
    ListColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_identity_attestation = Table({
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
        prefix: 'IDEATT',
    },
    label: 'Identity Attestation',
    name: 'x_aleen_snguardian_identity_attestation',
    schema: {
        assertion: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_assertion',
        }),
        delegated_to: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        identity: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        is_deleted: BooleanColumn({
            maxLength: 40,
        }),
        last_reviewed_by: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        last_reviewed_on: DateTimeColumn({
            label: 'Last Reviewed',
            maxLength: 40,
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
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
        status: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        valid_from: DateTimeColumn({
            maxLength: 40,
        }),
        valid_to: DateTimeColumn({
            maxLength: 40,
        }),
    },
})
