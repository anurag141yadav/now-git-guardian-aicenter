import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['e74d76621ba45610bf7ea82b234bcb68'],
    name: 'Check Worker Validity (onChange)',
    script: Now.include('./catalog_script_client_e74d76621ba45610bf7ea82b234bcb68-script.js'),
    type: 'onChange',
    catalogItem: 'f07913481b6c4e106962fe60cd4bcb32',
    variableName: '33f4cb001b2c4e106962fe60cd4bcb4b',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
