import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['8931dea747dc3a1051a3e84d416d43dd'],
    name: 'onSubmitValidateAccess',
    script: Now.include('./catalog_script_client_8931dea747dc3a1051a3e84d416d43dd-script.js'),
    type: 'onSubmit',
    variableSet: '5e42d75a472bea5051a3e84d416d431e',
    appliesTo: 'set',
    $meta: {
        useEsLatest: false,
    },
})
