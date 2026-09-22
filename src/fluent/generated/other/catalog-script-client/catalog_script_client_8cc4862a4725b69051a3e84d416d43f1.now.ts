import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['8cc4862a4725b69051a3e84d416d43f1'],
    name: 'On change location validations',
    script: Now.include('./catalog_script_client_8cc4862a4725b69051a3e84d416d43f1-script.js'),
    type: 'onChange',
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    variableName: 'd027050c4711ae5051a3e84d416d4308',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
