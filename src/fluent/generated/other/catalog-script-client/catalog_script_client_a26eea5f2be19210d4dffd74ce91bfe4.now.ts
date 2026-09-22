import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['a26eea5f2be19210d4dffd74ce91bfe4'],
    name: 'Hide Attributes onLoad',
    script: Now.include('./catalog_script_client_a26eea5f2be19210d4dffd74ce91bfe4-script.js'),
    type: 'onLoad',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
    vaSupported: true,
})
