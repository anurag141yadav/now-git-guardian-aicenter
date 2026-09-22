import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['60f758df33659210bf1221382e5c7b7c'],
    name: 'Set Request Type And Hide',
    script: Now.include('./catalog_script_client_60f758df33659210bf1221382e5c7b7c-script.js'),
    type: 'onLoad',
    catalogItem: '20b21f0f2b255210d4dffd74ce91bf94',
    $meta: {
        useEsLatest: false,
    },
})
