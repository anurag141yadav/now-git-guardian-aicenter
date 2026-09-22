import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['39daf0201bc41210bf7ea82b234bcbc4'],
    name: 'Hide Asset for Users (NFC)',
    script: Now.include('./catalog_script_client_39daf0201bc41210bf7ea82b234bcbc4-script.js'),
    type: 'onLoad',
    catalogItem: '2dc1679b1b1f8210bf7ea82b234bcb13',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
