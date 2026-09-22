import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['bb7fb171fbf20f102ce8f46b5eefdc5b'],
    name: 'Hide Request Type',
    script: Now.include('./catalog_script_client_bb7fb171fbf20f102ce8f46b5eefdc5b-script.js'),
    type: 'onLoad',
    catalogItem: '66ac3d39fb320f102ce8f46b5eefdcd0',
    vaSupported: true,
})
