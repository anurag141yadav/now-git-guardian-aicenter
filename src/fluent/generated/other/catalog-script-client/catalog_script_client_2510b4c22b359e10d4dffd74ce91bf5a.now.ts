import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['2510b4c22b359e10d4dffd74ce91bf5a'],
    name: 'Check if visit is all day long',
    script: Now.include('./catalog_script_client_2510b4c22b359e10d4dffd74ce91bf5a-script.js'),
    type: 'onChange',
    variableName: '69ad24022b359e10d4dffd74ce91bfae',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
