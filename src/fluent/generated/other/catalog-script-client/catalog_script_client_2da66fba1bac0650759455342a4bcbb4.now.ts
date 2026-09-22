import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['2da66fba1bac0650759455342a4bcbb4'],
    name: 'Disable Assets  And Hide Systems',
    script: Now.include('./catalog_script_client_2da66fba1bac0650759455342a4bcbb4-script.js'),
    type: 'onLoad',
    catalogItem: 'a1b7dec81b284e106962fe60cd4bcb6c',
    appliesOnTargetRecord: true,
    vaSupported: true,
})
