import {
    VariableSet,
    SingleLineTextVariable,
    YesNoVariable,
    SelectBoxVariable,
    ReferenceVariable,
    DateTimeVariable,
} from '@servicenow/sdk/core'

export const visitorDetails = VariableSet({
    $id: Now.ID['811132872ba15210d4dffd74ce91bf94'],
    title: 'Visitor Details',
    internalName: 'visit_visitor_details',
    layout: '2across',
    order: 10,
    version: 166,
    variables: {
        visit_visitor_single_first_name: SingleLineTextVariable({
            question: 'First Name',
            order: 10,
        }),
        visit_visitor_single_last_name: SingleLineTextVariable({
            question: 'Last Name',
            order: 20,
            width: 50,
        }),
        visit_visitor_single_email: SingleLineTextVariable({
            question: 'Email',
            order: 30,
            validateRegex: 'e005e481530020107d13ddeeff7b12e5',
        }),
        visit_visitor_single_phone: SingleLineTextVariable({
            question: 'Phone',
            order: 35,
        }),
        visitor_company_name: SingleLineTextVariable({
            question: 'Company Name',
            order: 40,
        }),
        visitor_need_assistance: YesNoVariable({
            question: 'Need Assistance',
            order: 45,
            defaultValue: 'No',
        }),
        visitor_type: SelectBoxVariable({
            question: 'Type',
            order: 50,
            choiceTable: 'x_aleen_snguardian_visitor',
            choiceField: 'visitor_type',
        }),
        visitor_visitor_status: ReferenceVariable({
            question: 'Visitor Status',
            order: 60,
            defaultValue: '75418e9d2b191a10d4dffd74ce91bfc7',
            readOnly: true,
            referenceTable: 'x_aleen_snguardian_visitor_status',
        }),
        id_verification_date: DateTimeVariable({
            question: 'ID Verification Date',
            order: 100,
        }),
        id_verification_document: SelectBoxVariable({
            question: 'ID Verification Document',
            order: 200,
            choiceTable: 'x_aleen_snguardian_visitor',
            choiceField: 'identity_validation_type',
        }),
        id_verification_expires_on: DateTimeVariable({
            question: 'ID Verification Expires On',
            order: 300,
        }),
        id_document_number: SingleLineTextVariable({
            question: 'Id Document Number',
            order: 500,
            hidden: true,
        }),
    },
})
