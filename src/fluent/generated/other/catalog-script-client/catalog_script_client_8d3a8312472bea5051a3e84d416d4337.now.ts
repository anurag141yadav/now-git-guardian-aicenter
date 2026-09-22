import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['8d3a8312472bea5051a3e84d416d4337'],
    name: 'Attestation Check(Access Request)',
    script: Now.include('./catalog_script_client_8d3a8312472bea5051a3e84d416d4337-script.js'),
    type: 'onSubmit',
    catalogItem: '683a4312472bea5051a3e84d416d4357',
    vaSupported: true,
})
