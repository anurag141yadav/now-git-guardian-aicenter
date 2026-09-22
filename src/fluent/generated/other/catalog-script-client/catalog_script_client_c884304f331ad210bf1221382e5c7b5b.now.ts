import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['c884304f331ad210bf1221382e5c7b5b'],
    name: 'On load get lobby config',
    script: Now.include('./catalog_script_client_c884304f331ad210bf1221382e5c7b5b-script.js'),
    type: 'onLoad',
    catalogItem: '20b21f0f2b255210d4dffd74ce91bf94',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
