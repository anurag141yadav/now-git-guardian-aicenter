import { VariableSet, SingleLineTextVariable } from '@servicenow/sdk/core'

export const visitors = VariableSet({
    $id: Now.ID['41b50b0f2be15210d4dffd74ce91bfc1'],
    title: 'Visitors',
    internalName: 'visit_visitor_mrvs',
    type: 'multiRow',
    version: 44,
    variables: {
        visit_visitor_first_name: SingleLineTextVariable({
            question: 'First Name',
            order: 100,
        }),
        visit_visitor_last_name: SingleLineTextVariable({
            question: 'Last Name',
            order: 200,
        }),
        visit_visitor_email: SingleLineTextVariable({
            question: 'Email',
            order: 300,
        }),
        visit_visitor_phone: SingleLineTextVariable({
            question: 'Phone',
            order: 400,
        }),
    },
})
