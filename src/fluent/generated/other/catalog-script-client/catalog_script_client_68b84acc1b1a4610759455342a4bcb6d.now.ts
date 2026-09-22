import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['68b84acc1b1a4610759455342a4bcb6d'],
    name: 'onChgUpdateUserPrerequisites',
    script: Now.include('./catalog_script_client_68b84acc1b1a4610759455342a4bcb6d-script.js'),
    type: 'onChange',
    catalogItem: '7753f3361bec0650759455342a4bcb0b',
    variableName: '1f8df7b21b204650759455342a4bcb56',
    appliesOnTargetRecord: true,
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
