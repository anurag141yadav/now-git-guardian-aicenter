import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['4e3bfc401b164610759455342a4bcb71'],
    name: 'On Location Change (Access Request)',
    script: Now.include('./catalog_script_client_4e3bfc401b164610759455342a4bcb71-script.js'),
    type: 'onLoad',
    variableSet: '135e12001b684e106962fe60cd4bcb87',
    appliesTo: 'set',
    appliesOnTargetRecord: true,
})
