import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['03ad9a041b9a4610759455342a4bcb88'],
    name: 'onChgInAccessMRVS',
    script: Now.include('./catalog_script_client_03ad9a041b9a4610759455342a4bcb88-script.js'),
    type: 'onChange',
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    variableName: 'bae1aa081b9a4610759455342a4bcb35',
    appliesOnTargetRecord: true,
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
