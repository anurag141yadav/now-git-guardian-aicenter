import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['2239b2e3472ca250f487c24fe16d43eb'],
    name: 'onSubmitValidateMobileRequest',
    script: Now.include('./catalog_script_client_2239b2e3472ca250f487c24fe16d43eb-script.js'),
    type: 'onSubmit',
    catalogItem: '2dc1679b1b1f8210bf7ea82b234bcb13',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
