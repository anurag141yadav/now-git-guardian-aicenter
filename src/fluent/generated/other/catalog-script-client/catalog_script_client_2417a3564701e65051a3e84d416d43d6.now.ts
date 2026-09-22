import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['2417a3564701e65051a3e84d416d43d6'],
    name: 'On Change Select Action',
    script: Now.include('./catalog_script_client_2417a3564701e65051a3e84d416d43d6-script.js'),
    type: 'onChange',
    catalogItem: '8e51568647c56250f487c24fe16d431d',
    variableName: '3ea35e4a47c56250f487c24fe16d43c3',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
