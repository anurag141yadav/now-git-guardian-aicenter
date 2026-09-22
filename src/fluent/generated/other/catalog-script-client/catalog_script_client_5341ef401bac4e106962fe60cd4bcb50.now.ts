import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['5341ef401bac4e106962fe60cd4bcb50'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_5341ef401bac4e106962fe60cd4bcb50-script.js'),
    type: 'onLoad',
    catalogItem: '0b4bdbc81b6c4e106962fe60cd4bcbbe',
    vaSupported: true,
})
