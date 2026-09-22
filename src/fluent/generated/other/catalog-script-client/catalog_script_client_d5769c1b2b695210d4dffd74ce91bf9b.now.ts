import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['d5769c1b2b695210d4dffd74ce91bf9b'],
    name: 'Visit End Date Validation',
    script: Now.include('./catalog_script_client_d5769c1b2b695210d4dffd74ce91bf9b-script.js'),
    type: 'onChange',
    variableName: '85c28b4c1be84e106962fe60cd4bcbeb',
    variableSet: '6623aa841b684e106962fe60cd4bcb9f',
    appliesTo: 'set',
    $meta: {
        useEsLatest: false,
    },
})
