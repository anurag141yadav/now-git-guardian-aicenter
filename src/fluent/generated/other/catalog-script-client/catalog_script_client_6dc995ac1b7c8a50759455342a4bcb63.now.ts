import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['6dc995ac1b7c8a50759455342a4bcb63'],
    name: 'OnChangeGetAssets',
    script: Now.include('./catalog_script_client_6dc995ac1b7c8a50759455342a4bcb63-script.js'),
    type: 'onChange',
    catalogItem: '0b4bdbc81b6c4e106962fe60cd4bcbbe',
    variableName: 'f9eb570c1b6c4e106962fe60cd4bcbc7',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
