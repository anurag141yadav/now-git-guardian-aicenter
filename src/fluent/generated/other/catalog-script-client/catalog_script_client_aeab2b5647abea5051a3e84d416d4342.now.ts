import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['aeab2b5647abea5051a3e84d416d4342'],
    name: 'onLoad Set Location',
    script: Now.include('./catalog_script_client_aeab2b5647abea5051a3e84d416d4342-script.js'),
    type: 'onLoad',
    variableSet: '5e42d75a472bea5051a3e84d416d431e',
    appliesTo: 'set',
})
