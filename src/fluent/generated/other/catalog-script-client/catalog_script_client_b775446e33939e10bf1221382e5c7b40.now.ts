import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['b775446e33939e10bf1221382e5c7b40'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_b775446e33939e10bf1221382e5c7b40-script.js'),
    type: 'onLoad',
    catalogItem: '6375cc2e33939e10bf1221382e5c7bbf',
    vaSupported: true,
})
