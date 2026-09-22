import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['0f9fbc6b2b8e1650d4dffd74ce91bf56'],
    name: 'Check WatchList',
    script: Now.include('./catalog_script_client_0f9fbc6b2b8e1650d4dffd74ce91bf56-script.js'),
    type: 'onChange',
    variableName: '7ed2ba0b2ba15210d4dffd74ce91bf65',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
