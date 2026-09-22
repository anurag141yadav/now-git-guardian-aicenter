import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['405048471b204650759455342a4bcbb9'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_405048471b204650759455342a4bcbb9-script.js'),
    type: 'onLoad',
    catalogItem: 'af04ff3a1bec0650759455342a4bcb36',
    vaSupported: true,
})
