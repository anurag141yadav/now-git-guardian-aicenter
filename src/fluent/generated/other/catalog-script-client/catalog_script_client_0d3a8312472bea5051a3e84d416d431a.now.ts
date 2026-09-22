import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['0d3a8312472bea5051a3e84d416d431a'],
    name: 'Check Access Level Change(Access Request',
    script: Now.include('./catalog_script_client_0d3a8312472bea5051a3e84d416d431a-script.js'),
    type: 'onChange',
    catalogItem: '683a4312472bea5051a3e84d416d4357',
    variableName: '703a4312472bea5051a3e84d416d43d7',
    appliesOnTargetRecord: true,
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
