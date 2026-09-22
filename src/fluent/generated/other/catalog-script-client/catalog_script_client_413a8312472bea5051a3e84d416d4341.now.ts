import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['413a8312472bea5051a3e84d416d4341'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_413a8312472bea5051a3e84d416d4341-script.js'),
    type: 'onLoad',
    catalogItem: '683a4312472bea5051a3e84d416d4357',
    vaSupported: true,
})
