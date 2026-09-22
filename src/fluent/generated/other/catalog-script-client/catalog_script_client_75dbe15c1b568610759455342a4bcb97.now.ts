import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['75dbe15c1b568610759455342a4bcb97'],
    name: 'OnSubmitValidatePrerequisites',
    script: Now.include('./catalog_script_client_75dbe15c1b568610759455342a4bcb97-script.js'),
    type: 'onSubmit',
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    vaSupported: true,
    order: 10,
    $meta: {
        useEsLatest: false,
    },
})
