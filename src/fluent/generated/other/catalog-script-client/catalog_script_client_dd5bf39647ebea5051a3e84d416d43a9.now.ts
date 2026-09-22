import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['dd5bf39647ebea5051a3e84d416d43a9'],
    name: 'onLoad Toggle Associated Asset',
    script: Now.include('./catalog_script_client_dd5bf39647ebea5051a3e84d416d43a9-script.js'),
    type: 'onLoad',
    variableSet: 'eb52131a472bea5051a3e84d416d4363',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
