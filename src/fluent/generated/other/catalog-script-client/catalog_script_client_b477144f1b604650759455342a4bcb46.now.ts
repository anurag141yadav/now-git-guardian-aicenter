import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['b477144f1b604650759455342a4bcb46'],
    name: 'OnChangeGetAssets',
    script: Now.include('./catalog_script_client_b477144f1b604650759455342a4bcb46-script.js'),
    type: 'onChange',
    catalogItem: '53ec2bb21bec0650759455342a4bcba3',
    variableName: '6ddc7b721b204650759455342a4bcb74',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
