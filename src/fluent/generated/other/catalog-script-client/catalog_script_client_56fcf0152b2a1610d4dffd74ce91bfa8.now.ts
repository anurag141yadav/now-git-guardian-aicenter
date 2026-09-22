import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['56fcf0152b2a1610d4dffd74ce91bfa8'],
    name: 'On Change Check Watchlist (Group)',
    script: Now.include('./catalog_script_client_56fcf0152b2a1610d4dffd74ce91bfa8-script.js'),
    type: 'onChange',
    variableName: '1ad19125332e5e10bf1221382e5c7be0',
    variableSet: '01fbc1eb2bce1650d4dffd74ce91bfe4',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
