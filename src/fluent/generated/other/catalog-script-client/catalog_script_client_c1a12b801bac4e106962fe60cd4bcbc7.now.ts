import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['c1a12b801bac4e106962fe60cd4bcbc7'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_c1a12b801bac4e106962fe60cd4bcbc7-script.js'),
    type: 'onLoad',
    catalogItem: 'f07913481b6c4e106962fe60cd4bcb32',
    vaSupported: true,
})
