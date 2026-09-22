import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['71c058543306d210bf1221382e5c7bcb'],
    name: 'On change visit start date',
    script: Now.include('./catalog_script_client_71c058543306d210bf1221382e5c7bcb-script.js'),
    type: 'onChange',
    variableName: '85c28b4c1be84e106962fe60cd4bcbeb',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    appliesTo: 'set',
    $meta: {
        useEsLatest: false,
    },
})
