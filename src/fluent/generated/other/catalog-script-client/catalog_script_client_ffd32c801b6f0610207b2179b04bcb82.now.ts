import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['ffd32c801b6f0610207b2179b04bcb82'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_ffd32c801b6f0610207b2179b04bcb82-script.js'),
    type: 'onLoad',
    catalogItem: '2dc1679b1b1f8210bf7ea82b234bcb13',
    vaSupported: true,
})
