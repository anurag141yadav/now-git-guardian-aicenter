import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['0840ab401bac4e106962fe60cd4bcbf0'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_0840ab401bac4e106962fe60cd4bcbf0-script.js'),
    type: 'onLoad',
    catalogItem: 'a1b7dec81b284e106962fe60cd4bcb6c',
    vaSupported: true,
})
