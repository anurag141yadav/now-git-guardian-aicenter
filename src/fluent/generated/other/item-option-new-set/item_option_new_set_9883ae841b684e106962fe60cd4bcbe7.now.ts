import {
    VariableSet,
    DateTimeVariable,
    ReferenceVariable,
    SelectBoxVariable,
    YesNoVariable,
} from '@servicenow/sdk/core'

export const workDetails = VariableSet({
    $id: Now.ID['9883ae841b684e106962fe60cd4bcbe7'],
    title: 'Work Details',
    internalName: 'work_details',
    layout: '2across',
    order: 200,
    displayTitle: true,
    version: 19,
    variables: {
        work_start_date: DateTimeVariable({
            question: 'Start Date',
            order: 10,
            mandatory: true,
        }),
        work_end_date: DateTimeVariable({
            question: 'End Date',
            order: 20,
            mandatory: true,
        }),
        work_location: ReferenceVariable({
            question: 'Work Location',
            order: 35,
            referenceTable: 'x_aleen_snguardian_location',
        }),
        work_reason: SelectBoxVariable({
            question: 'Reason',
            order: 40,
            choices: {
                CONTRACTOR: {
                    label: 'Contract Worker',
                    inactive: false,
                    sequence: 200,
                },
                ONSITE: {
                    label: 'On-Site',
                    inactive: false,
                    sequence: 100,
                },
                OTHERS: {
                    label: 'Others',
                    inactive: false,
                    sequence: 100,
                },
            },
        }),
        work_need_access: YesNoVariable({
            question: 'Need Access',
            order: 50,
        }),
    },
})
