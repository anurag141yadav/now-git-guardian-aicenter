import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['0b7dc58533de1210bf1221382e5c7bd9'],
    name: 'Show Host Email for Kiosk',
    script: Now.include('./catalog_script_client_0b7dc58533de1210bf1221382e5c7bd9-script.js'),
    type: 'onLoad',
    variableSet: '776c041f2b295210d4dffd74ce91bf93',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
