import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['de8aa5641b3402106962fe60cd4bcb8c'],
    name: 'onChangeGetAssets',
    script: Now.include('./catalog_script_client_de8aa5641b3402106962fe60cd4bcb8c-script.js'),
    type: 'onChange',
    catalogItem: 'a1b7dec81b284e106962fe60cd4bcb6c',
    variableName: '56b8d64c1b284e106962fe60cd4bcb15',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
