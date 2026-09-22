import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['50594ae41bb402106962fe60cd4bcbb0'],
    name: 'onChangeUserUpdateDetails',
    script: Now.include('./catalog_script_client_50594ae41bb402106962fe60cd4bcbb0-script.js'),
    type: 'onChange',
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    variableName: '1f8df7b21b204650759455342a4bcb56',
    appliesOnTargetRecord: true,
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
