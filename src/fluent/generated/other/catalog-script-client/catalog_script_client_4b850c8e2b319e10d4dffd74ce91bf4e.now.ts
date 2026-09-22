import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['4b850c8e2b319e10d4dffd74ce91bf4e'],
    name: 'Check if visit is recurring',
    script: Now.include('./catalog_script_client_4b850c8e2b319e10d4dffd74ce91bf4e-script.js'),
    type: 'onChange',
    variableName: 'f4a6e3732b351610d4dffd74ce91bf72',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
