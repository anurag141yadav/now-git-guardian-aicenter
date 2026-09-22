import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['8187139a33df5e10bf1221382e5c7bb9'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_8187139a33df5e10bf1221382e5c7bb9-script.js'),
    type: 'onLoad',
    catalogItem: 'b487d71a33df5e10bf1221382e5c7bca',
    vaSupported: true,
})
