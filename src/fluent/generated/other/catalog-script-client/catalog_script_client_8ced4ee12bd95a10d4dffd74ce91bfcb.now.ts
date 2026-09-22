import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['8ced4ee12bd95a10d4dffd74ce91bfcb'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_8ced4ee12bd95a10d4dffd74ce91bfcb-script.js'),
    type: 'onLoad',
    catalogItem: '70518e652b995a10d4dffd74ce91bff2',
    vaSupported: true,
})
