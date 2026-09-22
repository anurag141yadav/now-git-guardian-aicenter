import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['ad5448612bbad650d4dffd74ce91bf2e'],
    name: 'On submit check terms and conditions',
    script: Now.include('./catalog_script_client_ad5448612bbad650d4dffd74ce91bf2e-script.js'),
    type: 'onSubmit',
    variableSet: 'c068dc862bb19e10d4dffd74ce91bfcb',
    appliesTo: 'set',
    vaSupported: true,
})
