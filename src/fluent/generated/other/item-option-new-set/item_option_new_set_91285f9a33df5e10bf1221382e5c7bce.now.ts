import { VariableSet, SingleLineTextVariable, EmailVariable } from '@servicenow/sdk/core'

export const identityDetails = VariableSet({
    $id: Now.ID['91285f9a33df5e10bf1221382e5c7bce'],
    title: 'Identity Details',
    internalName: 'identity_details',
    description: 'Bulk Request',
    type: 'multiRow',
    layout: '2across',
    version: 6,
    variables: {
        first_name: SingleLineTextVariable({
            question: 'First Name',
            order: 10,
        }),
        last_name: SingleLineTextVariable({
            question: 'Last Name',
            order: 20,
        }),
        email: EmailVariable({
            question: 'Email',
            order: 30,
        }),
        phone: SingleLineTextVariable({
            question: 'Phone',
            order: 40,
        }),
        department: SingleLineTextVariable({
            question: 'Department',
            order: 50,
        }),
    },
})
