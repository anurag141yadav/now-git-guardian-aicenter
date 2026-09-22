import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['093a8312472bea5051a3e84d416d4325'],
    name: 'onChangeGetAccess',
    script: Now.include('./catalog_script_client_093a8312472bea5051a3e84d416d4325-script.js'),
    type: 'onChange',
    catalogItem: '683a4312472bea5051a3e84d416d4357',
    variableName: 'bc3a4312472bea5051a3e84d416d43a2',
    appliesOnTargetRecord: true,
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
