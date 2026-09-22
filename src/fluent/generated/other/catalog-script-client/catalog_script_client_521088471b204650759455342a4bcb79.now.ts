import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['521088471b204650759455342a4bcb79'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_521088471b204650759455342a4bcb79-script.js'),
    type: 'onLoad',
    catalogItem: '169d6bb21bec0650759455342a4bcbe2',
    vaSupported: true,
})
