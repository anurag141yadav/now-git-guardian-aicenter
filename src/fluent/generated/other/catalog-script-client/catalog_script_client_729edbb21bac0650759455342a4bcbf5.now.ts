import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['729edbb21bac0650759455342a4bcbf5'],
    name: 'Disable Assets for Users',
    script: Now.include('./catalog_script_client_729edbb21bac0650759455342a4bcbf5-script.js'),
    type: 'onLoad',
    catalogItem: '0b4bdbc81b6c4e106962fe60cd4bcbbe',
    appliesOnTargetRecord: true,
    vaSupported: true,
})
