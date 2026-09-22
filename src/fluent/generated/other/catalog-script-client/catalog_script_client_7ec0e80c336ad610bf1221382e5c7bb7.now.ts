import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['7ec0e80c336ad610bf1221382e5c7bb7'],
    name: 'On Submit Validate Group size',
    script: Now.include('./catalog_script_client_7ec0e80c336ad610bf1221382e5c7bb7-script.js'),
    type: 'onSubmit',
    variableSet: '01fbc1eb2bce1650d4dffd74ce91bfe4',
    appliesTo: 'set',
    vaSupported: true,
})
