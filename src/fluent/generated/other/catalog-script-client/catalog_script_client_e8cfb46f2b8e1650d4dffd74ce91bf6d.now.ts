import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['e8cfb46f2b8e1650d4dffd74ce91bf6d'],
    name: 'Check WatchList',
    script: Now.include('./catalog_script_client_e8cfb46f2b8e1650d4dffd74ce91bf6d-script.js'),
    type: 'onChange',
    variableName: '6b23324b2ba15210d4dffd74ce91bf0d',
    variableSet: '811132872ba15210d4dffd74ce91bf94',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
