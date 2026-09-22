import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['2d2acfdf2b659210d4dffd74ce91bfbf'],
    name: 'Show Attributes based on Visitor Type',
    script: Now.include('./catalog_script_client_2d2acfdf2b659210d4dffd74ce91bfbf-script.js'),
    type: 'onChange',
    variableName: '8b95b28b2ba15210d4dffd74ce91bf53',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
