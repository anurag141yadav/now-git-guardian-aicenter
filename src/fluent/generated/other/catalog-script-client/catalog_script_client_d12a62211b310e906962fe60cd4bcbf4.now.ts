import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['d12a62211b310e906962fe60cd4bcbf4'],
    name: 'Reset Pin Validation',
    script: Now.include('./catalog_script_client_d12a62211b310e906962fe60cd4bcbf4-script.js'),
    type: 'onChange',
    catalogItem: 'd574bb7a1bec0650759455342a4bcbe6',
    variableName: '0efe77361b204650759455342a4bcbf0',
    vaSupported: true,
})
