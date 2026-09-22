import { VariableSet, CustomVariable } from '@servicenow/sdk/core'

export const summary = VariableSet({
    $id: Now.ID['844b40972b295210d4dffd74ce91bf95'],
    title: 'Summary',
    internalName: 'visit_checkin_success',
    variables: {
        visitor_visit_success_message: CustomVariable({
            question: 'Visitor Visit Success Message',
            widget: '5d89fa4733219210bf1221382e5c7b2f',
        }),
    },
})
