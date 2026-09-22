import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['a2c7ac0a2bf19e10d4dffd74ce91bf76'],
    name: 'On Change Validate Time',
    script: Now.include('./catalog_script_client_a2c7ac0a2bf19e10d4dffd74ce91bf76-script.js'),
    type: 'onChange',
    variableName: '7b64044e2b319e10d4dffd74ce91bf50',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
