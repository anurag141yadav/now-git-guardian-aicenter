import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['827f702f2b8e1650d4dffd74ce91bf72'],
    name: 'Check WatchList',
    script: Now.include('./catalog_script_client_827f702f2b8e1650d4dffd74ce91bf72-script.js'),
    type: 'onChange',
    variableName: 'bca2760b2ba15210d4dffd74ce91bf30',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
