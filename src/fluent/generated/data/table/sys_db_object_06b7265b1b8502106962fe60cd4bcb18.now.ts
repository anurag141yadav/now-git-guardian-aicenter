import {
    Table,
    ListColumn,
    StringColumn,
    DateTimeColumn,
    BooleanColumn,
    ReferenceColumn,
    ChoiceColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_review = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    audit: true,
    autoNumber: {
        prefix: 'REVIEW',
    },
    label: 'Review',
    name: 'x_aleen_snguardian_review',
    schema: {
        access_levels: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_access_level',
        }),
        criteria: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        due_date: DateTimeColumn({
            mandatory: true,
            maxLength: 40,
        }),
        expiry_status: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
            referenceQual: 'null',
            useReferenceQualifier: 'simple',
        }),
        locations: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        override_records: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        owner: ReferenceColumn({
            default: 'javascript:gs.getUserID()',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        post_due_date_action: StringColumn({
            default: 'APPROVE',
            dropdown: 'dropdown_without_none',
            mandatory: true,
            maxLength: 40,
        }),
        review_state: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        start_date: DateTimeColumn({
            mandatory: true,
            maxLength: 40,
        }),
        status: ReferenceColumn({
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            dropdown: 'dropdown_with_none',
            maxLength: 40,
            referenceTable: 'x_aleen_snguardian_status_code',
            referenceQual: 'applicable_toLIKEREVIEW^EQ',
            useReferenceQualifier: 'simple',
        }),
        task_owners: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        type: ChoiceColumn({
            default: 'AREAOWNER',
            dropdown: 'dropdown_without_none',
            mandatory: true,
            maxLength: 32,
        }),
        using_status: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            label: 'Work notes',
            maxLength: 4000,
        }),
    },
    createAccessControls: true,
})
