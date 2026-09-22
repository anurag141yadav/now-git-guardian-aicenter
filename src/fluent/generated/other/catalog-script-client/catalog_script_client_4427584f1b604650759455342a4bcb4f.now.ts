import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['4427584f1b604650759455342a4bcb4f'],
    name: 'Disable Assets and Hide System',
    script: Now.include('./catalog_script_client_4427584f1b604650759455342a4bcb4f-script.js'),
    type: 'onLoad',
    catalogItem: '53ec2bb21bec0650759455342a4bcba3',
    vaSupported: true,
})
