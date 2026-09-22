import { VariableSet, CustomVariable, SingleLineTextVariable } from '@servicenow/sdk/core'

export const visitRecurrenceSelector = VariableSet({
    $id: Now.ID['2ecb32522b311250d4dffd74ce91bf6f'],
    title: 'Visit Recurrence Selector',
    internalName: 'visit_recurrence_selector',
    version: 5,
    variables: {
        select_recurrence: CustomVariable({
            question: 'Select Recurrence',
            widget: '93eabede2bfdde10d4dffd74ce91bffd',
        }),
        recurring_value: SingleLineTextVariable({
            question: 'Recurring  Value',
            order: 200,
        }),
    },
})
