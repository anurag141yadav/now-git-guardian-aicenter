import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['35a4b316333e1290bf1221382e5c7b17'],
    name: 'On change validate email (group)',
    script: Now.include('./catalog_script_client_35a4b316333e1290bf1221382e5c7b17-script.js'),
    type: 'onChange',
    variableName: 'ee26cb8f2be15210d4dffd74ce91bfc2',
    variableSet: '41b50b0f2be15210d4dffd74ce91bfc1',
    appliesTo: 'set',
    vaSupported: true,
})
