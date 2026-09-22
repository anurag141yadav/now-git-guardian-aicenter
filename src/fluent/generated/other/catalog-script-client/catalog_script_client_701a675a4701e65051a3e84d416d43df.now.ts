import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['701a675a4701e65051a3e84d416d43df'],
    name: 'On change Badge Type',
    script: Now.include('./catalog_script_client_701a675a4701e65051a3e84d416d43df-script.js'),
    type: 'onChange',
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    variableName: '89e8f0a94769e61051a3e84d416d435d',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
