import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['f11cfe611b710e906962fe60cd4bcb35'],
    name: 'Reset Pin Submit Validation',
    script: Now.include('./catalog_script_client_f11cfe611b710e906962fe60cd4bcb35-script.js'),
    type: 'onSubmit',
    catalogItem: 'd574bb7a1bec0650759455342a4bcbe6',
    vaSupported: true,
})
