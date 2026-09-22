import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['8436e63047dab21051a3e84d416d43cc'],
    name: 'OnSubmitCheckIfProcessing',
    script: Now.include('./catalog_script_client_8436e63047dab21051a3e84d416d43cc-script.js'),
    type: 'onSubmit',
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
