import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['b38d6e5f2be19210d4dffd74ce91bf53'],
    name: 'Use Existing Visitor OR Not',
    script: Now.include('./catalog_script_client_b38d6e5f2be19210d4dffd74ce91bf53-script.js'),
    type: 'onChange',
    variableName: '059c24903386d210bf1221382e5c7b1d',
    variableSet: 'afda325f2b259210d4dffd74ce91bf60',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
