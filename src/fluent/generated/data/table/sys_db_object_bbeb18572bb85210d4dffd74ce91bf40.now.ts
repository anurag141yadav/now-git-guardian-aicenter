import {
    Table,
    StringColumn,
    Password2Column,
    DateTimeColumn,
    ChoiceColumn,
    BooleanColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_aleen_snguardian_visitor = Table({
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
    extends: 'x_aleen_snguardian_identity',
    label: 'Visitor',
    name: 'x_aleen_snguardian_visitor',
    schema: {
        company: StringColumn({
            maxLength: 40,
        }),
        document_number: Password2Column({
            maxLength: 255,
        }),
        identity_validation_date: DateTimeColumn({
            maxLength: 40,
        }),
        identity_validation_expires_on: DateTimeColumn({
            maxLength: 40,
        }),
        identity_validation_type: ChoiceColumn({
            dropdown: 'dropdown_with_none',
            maxLength: 40,
        }),
        keep_photo: BooleanColumn({
            default: true,
            label: [
                {
                    hint: 'The photo will be deleted after all scheduled visits if keep photo is false.',
                    help: 'The photo will be deleted after all scheduled visits if keep photo is false.',
                },
            ],
            maxLength: 40,
        }),
        need_assistance: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        visitor_status: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_aleen_snguardian_visitor_status',
        }),
        visitor_type: ChoiceColumn({
            default: 'GUEST',
            dropdown: 'dropdown_without_none',
            maxLength: 32,
        }),
    },
})
