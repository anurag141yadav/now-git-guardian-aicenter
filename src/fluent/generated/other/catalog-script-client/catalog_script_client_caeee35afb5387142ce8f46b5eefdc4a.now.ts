import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['caeee35afb5387142ce8f46b5eefdc4a'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_caeee35afb5387142ce8f46b5eefdc4a-script.js'),
    type: 'onLoad',
    catalogItem: '24942b96fb1387142ce8f46b5eefdcac',
    vaSupported: true,
})
