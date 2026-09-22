import {
    Table,
    BooleanColumn,
    StringColumn,
    DateTimeColumn,
    ListColumn,
    ReferenceColumn,
    ChoiceColumn,
    DateColumn,
    TimeColumn,
    GenericColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor_visit = Table({
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
        prefix: 'VISIT',
    },
    label: 'Visit',
    name: 'x_aleen_snguardian_visitor_visit',
    schema: {
        check_in_check_out_as_a_group: BooleanColumn({
            default: true,
            label: 'Check-in/Check-out  as a Group',
            maxLength: 40,
        }),
        comments: StringColumn({
            isFullUTF8: true,
            maxLength: 255,
        }),
        end_date: DateTimeColumn({
            maxLength: 40,
        }),
        escrort: ListColumn({
            label: 'Escort(s)',
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        group: StringColumn({
            maxLength: 40,
        }),
        host: ListColumn({
            label: 'Host(s)',
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        is_all_day_event: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        is_deleted: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        is_nda_signed: BooleanColumn({
            default: false,
            label: 'Is NDA Signed',
            maxLength: 40,
        }),
        is_recurring: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        location: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        nda_sign_expiry_date_time: DateTimeColumn({
            label: 'NDA Exipry Date&Time',
            maxLength: 40,
        }),
        nda_signed_date_time: DateTimeColumn({
            label: 'NDA Signed Date&Time',
            maxLength: 40,
        }),
        nda: ReferenceColumn({
            label: 'NDA',
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_nda_email_templates',
        }),
        number: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            maxLength: 40,
        }),
        parent: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_visit',
        }),
        purpose: ChoiceColumn({
            dropdown: 'dropdown_with_none',
            label: 'Visit Purpose',
            mandatory: true,
            maxLength: 32,
        }),
        recurring_end_date: DateColumn({
            label: 'End Date',
            maxLength: 40,
        }),
        recurring_end_time: TimeColumn({
            label: 'End Time',
            maxLength: 40,
        }),
        recurring_start_date: DateColumn({
            label: 'Start Date',
            maxLength: 40,
        }),
        recurring_start_time: TimeColumn({
            label: 'Start Time',
            maxLength: 40,
        }),
        recurring_type: StringColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        recurring_value: StringColumn({
            isFullUTF8: true,
            label: 'Recurring  Value',
            maxLength: 255,
        }),
        request: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_request',
        }),
        start_date: DateTimeColumn({
            maxLength: 40,
        }),
        status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_mt_visit_status',
        }),
        type: ReferenceColumn({
            label: 'Visit Type',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_visit_type',
        }),
        visitor: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor',
        }),
        visitors: ListColumn({
            maxLength: 4000,
            referenceTable: 'x_aleen_snguardian_visitor',
        }),
        work_notes: GenericColumn({
            columnType: 'journal_input',
            maxLength: 4000,
        }),
    },
})
