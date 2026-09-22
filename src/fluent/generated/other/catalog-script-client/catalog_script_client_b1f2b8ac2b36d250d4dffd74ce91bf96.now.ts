import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['b1f2b8ac2b36d250d4dffd74ce91bf96'],
    name: 'On Change Validate Group Name',
    script: Now.include('./catalog_script_client_b1f2b8ac2b36d250d4dffd74ce91bf96-script.js'),
    type: 'onChange',
    variableName: 'e4e3fa0b2ba15210d4dffd74ce91bf3c',
    variableSet: 'afda325f2b259210d4dffd74ce91bf60',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
