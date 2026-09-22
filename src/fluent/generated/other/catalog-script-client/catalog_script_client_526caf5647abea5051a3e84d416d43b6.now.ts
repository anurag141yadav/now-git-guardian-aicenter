import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['526caf5647abea5051a3e84d416d43b6'],
    name: 'onChange Access Populate Asset',
    script: Now.include('./catalog_script_client_526caf5647abea5051a3e84d416d43b6-script.js'),
    type: 'onChange',
    variableName: 'b2d3df9a472bea5051a3e84d416d432a',
    variableSet: '5e42d75a472bea5051a3e84d416d431e',
    appliesTo: 'set',
})
