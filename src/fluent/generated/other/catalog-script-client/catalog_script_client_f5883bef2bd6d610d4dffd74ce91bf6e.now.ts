import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['f5883bef2bd6d610d4dffd74ce91bf6e'],
    name: 'Validate Health Conditions',
    script: Now.include('./catalog_script_client_f5883bef2bd6d610d4dffd74ce91bf6e-script.js'),
    type: 'onSubmit',
    variableSet: 'd96b03072b255210d4dffd74ce91bf42',
    appliesTo: 'set',
    vaSupported: true,
})
