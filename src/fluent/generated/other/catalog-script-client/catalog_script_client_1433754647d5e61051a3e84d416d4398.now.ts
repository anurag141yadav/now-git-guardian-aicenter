import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['1433754647d5e61051a3e84d416d4398'],
    name: 'On change request for validations',
    script: Now.include('./catalog_script_client_1433754647d5e61051a3e84d416d4398-script.js'),
    type: 'onChange',
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    variableName: '36359a8a47c56250f487c24fe16d43a4',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
