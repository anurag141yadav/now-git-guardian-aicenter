import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['f4ff37761b204650759455342a4bcb30'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_f4ff37761b204650759455342a4bcb30-script.js'),
    type: 'onLoad',
    catalogItem: '53ec2bb21bec0650759455342a4bcba3',
    vaSupported: true,
})
