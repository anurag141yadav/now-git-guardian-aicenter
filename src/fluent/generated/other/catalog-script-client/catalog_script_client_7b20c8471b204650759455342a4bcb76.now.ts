import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['7b20c8471b204650759455342a4bcb76'],
    name: 'onLoadSetReqTypeLoadUser',
    script: Now.include('./catalog_script_client_7b20c8471b204650759455342a4bcb76-script.js'),
    type: 'onLoad',
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    $meta: {
        useEsLatest: false,
    },
})
