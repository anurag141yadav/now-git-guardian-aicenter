import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['ca9ec6252bd95a10d4dffd74ce91bf6f'],
    name: 'Disable Assets for Users',
    script: Now.include('./catalog_script_client_ca9ec6252bd95a10d4dffd74ce91bf6f-script.js'),
    type: 'onLoad',
    catalogItem: '70518e652b995a10d4dffd74ce91bff2',
    appliesOnTargetRecord: true,
    vaSupported: true,
})
