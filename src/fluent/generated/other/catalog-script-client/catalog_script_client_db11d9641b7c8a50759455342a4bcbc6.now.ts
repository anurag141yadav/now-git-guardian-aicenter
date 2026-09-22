import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['db11d9641b7c8a50759455342a4bcbc6'],
    name: 'GetUserInformation',
    script: Now.include('./catalog_script_client_db11d9641b7c8a50759455342a4bcbc6-script.js'),
    type: 'onChange',
    catalogItem: 'af04ff3a1bec0650759455342a4bcb36',
    variableName: 'f6bdb7b21b204650759455342a4bcb81',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
