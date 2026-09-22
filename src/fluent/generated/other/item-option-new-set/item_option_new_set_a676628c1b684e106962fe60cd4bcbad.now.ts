import {
    VariableSet,
    SingleLineTextVariable,
    EmailVariable,
    ReferenceVariable,
    AttachmentVariable,
} from '@servicenow/sdk/core'

export const workerDetails = VariableSet({
    $id: Now.ID['a676628c1b684e106962fe60cd4bcbad'],
    title: 'Worker Details',
    internalName: 'worker_details',
    layout: '2across',
    displayTitle: true,
    version: 15,
    variables: {
        worker_first_name: SingleLineTextVariable({
            question: 'First Name',
            order: 10,
        }),
        worker_last_name: SingleLineTextVariable({
            question: 'Last Name',
            order: 20,
        }),
        worker_email: EmailVariable({
            question: 'Email',
            order: 30,
            mandatory: true,
        }),
        worker_phone: SingleLineTextVariable({
            question: 'Phone',
            order: 40,
        }),
        worker_manager: ReferenceVariable({
            question: 'Manager',
            order: 50,
            mandatory: true,
            referenceTable: 'x_aleen_snguardian_identity',
            referenceQualCondition: 'master_user_idISNOTEMPTY^EQ',
        }),
        worker_department: SingleLineTextVariable({
            question: 'Department',
            order: 60,
        }),
        worker_photo: AttachmentVariable({
            question: 'Photo',
            order: 80,
        }),
    },
})
