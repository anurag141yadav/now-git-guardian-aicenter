import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['0b0caf5647abea5051a3e84d416d4368'],
    name: 'onLoad Toggle Associated Asset',
    script: Now.include('./catalog_script_client_0b0caf5647abea5051a3e84d416d4368-script.js'),
    type: 'onLoad',
    variableSet: '5e42d75a472bea5051a3e84d416d431e',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
