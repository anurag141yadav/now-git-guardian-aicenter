import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['94c6ef124701e65051a3e84d416d4392'],
    name: 'Set Request Type and Hide',
    script: Now.include('./catalog_script_client_94c6ef124701e65051a3e84d416d4392-script.js'),
    type: 'onLoad',
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    order: 1,
})
