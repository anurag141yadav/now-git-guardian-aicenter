import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['b09beee347e8a250f487c24fe16d43c6'],
    name: 'onChangeUserValidation',
    script: Now.include('./catalog_script_client_b09beee347e8a250f487c24fe16d43c6-script.js'),
    type: 'onChange',
    catalogItem: '2dc1679b1b1f8210bf7ea82b234bcb13',
    variableName: '926567df1b1f8210bf7ea82b234bcb06',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
