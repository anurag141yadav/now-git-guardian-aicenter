import { CatalogUiPolicy } from '@servicenow/sdk/core'

CatalogUiPolicy({
    $id: Now.ID['0793783d47e7f61051a3e84d416d432c'],
    appliesTo: 'set',
    variableSet: 'afda325f2b259210d4dffd74ce91bf60',
    shortDescription: 'On Load Visit Home Validations',
    runScriptsInUiType: 'desktop',
    actions: [
        {
            variableName: 'e4e3fa0b2ba15210d4dffd74ce91bf3c',
            variable: 'visit_visitor_group_name',
            visible: false,
        },
        {
            variableName: '059c24903386d210bf1221382e5c7b1d',
            variable: 'visit_visitor_single_visitor_id',
            visible: false,
        },
        {
            variableName: '730576cb2ba15210d4dffd74ce91bf12',
            variable: 'visit_visitor_attachment',
            visible: false,
        },
        {
            variableName: 'fb43d8172b4ad250d4dffd74ce91bf1a',
            variable: 'check_in_out_as_one',
            visible: false,
        },
    ],
})
