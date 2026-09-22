import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['5b8b54c41b2f0610207b2179b04bcb38'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_5b8b54c41b2f0610207b2179b04bcb38-script.js'),
    type: 'onLoad',
    catalogItem: 'cf7100fa1b640a506962fe60cd4bcb9f',
    vaSupported: true,
})
