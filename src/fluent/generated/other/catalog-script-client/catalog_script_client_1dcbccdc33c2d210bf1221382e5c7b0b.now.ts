import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['1dcbccdc33c2d210bf1221382e5c7b0b'],
    name: 'On change validate recurring end date',
    script: Now.include('./catalog_script_client_1dcbccdc33c2d210bf1221382e5c7b0b-script.js'),
    type: 'onChange',
    variableName: 'f4808c862b319e10d4dffd74ce91bf85',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
