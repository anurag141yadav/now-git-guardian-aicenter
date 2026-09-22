import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['a87084871b204650759455342a4bcb18'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_a87084871b204650759455342a4bcb18-script.js'),
    type: 'onLoad',
    catalogItem: 'd574bb7a1bec0650759455342a4bcbe6',
    vaSupported: true,
})
