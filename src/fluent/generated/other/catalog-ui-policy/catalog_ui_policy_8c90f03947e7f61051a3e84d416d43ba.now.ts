import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['8c90f03947e7f61051a3e84d416d43ba'],
    appliesTo: 'set',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    shortDescription: 'on Load Visit Schedule',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: 'f4808c862b319e10d4dffd74ce91bf85',
            variable: 'recurring_end_date',
            visible: false,
        },
        {
            variableName: '01c4844e2b319e10d4dffd74ce91bf02',
            variable: 'recurring_end_time',
            visible: false,
        },
        {
            variableName: '914080862b319e10d4dffd74ce91bf79',
            variable: 'recurring_start_date',
            visible: false,
        },
        {
            variableName: 'a18dbf712b319e10d4dffd74ce91bf59',
            variable: 'visit_recurring_type',
            visible: false,
        },
        {
            variableName: '85c28b4c1be84e106962fe60cd4bcbeb',
            variable: 'visit_start_date',
            visible: false,
        },
        {
            variableName: 'dfd2438c1be84e106962fe60cd4bcb82',
            variable: 'visit_end_date',
            visible: false,
        },
        {
            variableName: '7b64044e2b319e10d4dffd74ce91bf50',
            variable: 'recurring_start_time',
            visible: false,
        },
    ],
})
