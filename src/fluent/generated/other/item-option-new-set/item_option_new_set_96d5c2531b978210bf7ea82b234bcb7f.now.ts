import {
    VariableSet,
    SingleLineTextVariable,
    DateTimeVariable,
    ReferenceVariable,
    AttachmentVariable,
} from '@servicenow/sdk/core'

export const userDetails = VariableSet({
    $id: Now.ID['96d5c2531b978210bf7ea82b234bcb7f'],
    title: 'User Details',
    internalName: 'user_details',
    layout: '2across',
    version: 16,
    variables: {
        user_first_name: SingleLineTextVariable({
            question: 'First Name',
            order: 10,
        }),
        user_last_name: SingleLineTextVariable({
            question: 'Last name',
            order: 20,
        }),
        user_email: SingleLineTextVariable({
            question: 'Email',
            order: 30,
        }),
        user_phone_number: SingleLineTextVariable({
            question: 'Phone Number',
            order: 40,
        }),
        valid_from: DateTimeVariable({
            question: 'Valid from',
            order: 50,
        }),
        valid_to: DateTimeVariable({
            question: 'Valid to',
            order: 60,
        }),
        manager: ReferenceVariable({
            question: 'Manager',
            order: 70,
            referenceTable: 'x_aleen_snguardian_identity',
        }),
        user_photo: AttachmentVariable({
            question: 'Photo',
            order: 80,
        }),
    },
})
