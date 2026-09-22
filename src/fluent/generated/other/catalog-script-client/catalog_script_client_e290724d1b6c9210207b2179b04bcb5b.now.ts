import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['e290724d1b6c9210207b2179b04bcb5b'],
    name: 'Toggle Associated Asset( Access Levels)',
    script: Now.include('./catalog_script_client_e290724d1b6c9210207b2179b04bcb5b-script.js'),
    type: 'onLoad',
    variableSet: '135e12001b684e106962fe60cd4bcb87',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
