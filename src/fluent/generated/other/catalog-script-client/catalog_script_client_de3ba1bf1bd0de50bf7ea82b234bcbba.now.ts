import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['de3ba1bf1bd0de50bf7ea82b234bcbba'],
    name: 'OnChange Access ( Associated Asset)',
    script: Now.include('./catalog_script_client_de3ba1bf1bd0de50bf7ea82b234bcbba-script.js'),
    type: 'onChange',
    variableName: '8fcff2881be84e106962fe60cd4bcbf0',
    variableSet: '135e12001b684e106962fe60cd4bcb87',
    appliesTo: 'set',
    appliesOnTargetRecord: true,
    $meta: {
        useEsLatest: false,
    },
})
