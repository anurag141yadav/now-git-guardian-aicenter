import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['10aa8d2b2bce1650d4dffd74ce91bfa9'],
    name: 'Check WatchList',
    script: Now.include('./catalog_script_client_10aa8d2b2bce1650d4dffd74ce91bfa9-script.js'),
    type: 'onChange',
    variableName: '1d53ba0b2ba15210d4dffd74ce91bf75',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
