import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['f00292a747dc3a1051a3e84d416d4351'],
    name: 'onSubmitValidateAccess',
    script: Now.include('./catalog_script_client_f00292a747dc3a1051a3e84d416d4351-script.js'),
    type: 'onSubmit',
    variableSet: 'eb52131a472bea5051a3e84d416d4363',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
