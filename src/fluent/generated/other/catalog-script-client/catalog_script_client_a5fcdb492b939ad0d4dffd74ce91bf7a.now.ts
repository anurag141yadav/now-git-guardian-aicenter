import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['a5fcdb492b939ad0d4dffd74ce91bf7a'],
    name: 'Hide Variable sets for Group Check In',
    script: Now.include('./catalog_script_client_a5fcdb492b939ad0d4dffd74ce91bf7a-script.js'),
    type: 'onLoad',
    catalogItem: '20b21f0f2b255210d4dffd74ce91bf94',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
