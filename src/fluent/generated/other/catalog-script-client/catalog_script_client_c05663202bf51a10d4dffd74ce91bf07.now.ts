import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['c05663202bf51a10d4dffd74ce91bf07'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_c05663202bf51a10d4dffd74ce91bf07-script.js'),
    type: 'onLoad',
    catalogItem: '3f46e3ec2bb51a10d4dffd74ce91bf43',
    $meta: {
        useEsLatest: false,
    },
})
