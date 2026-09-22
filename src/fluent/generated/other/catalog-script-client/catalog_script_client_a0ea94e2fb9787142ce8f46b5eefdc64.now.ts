import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['a0ea94e2fb9787142ce8f46b5eefdc64'],
    name: 'Disable Assets for Users',
    script: Now.include('./catalog_script_client_a0ea94e2fb9787142ce8f46b5eefdc64-script.js'),
    type: 'onLoad',
    catalogItem: '24942b96fb1387142ce8f46b5eefdcac',
    appliesOnTargetRecord: true,
    vaSupported: true,
})
