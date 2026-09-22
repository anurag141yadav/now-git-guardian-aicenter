import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['3c5431c647d5e61051a3e84d416d43d2'],
    name: 'On submit check active badge',
    script: Now.include('./catalog_script_client_3c5431c647d5e61051a3e84d416d43d2-script.js'),
    type: 'onSubmit',
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
