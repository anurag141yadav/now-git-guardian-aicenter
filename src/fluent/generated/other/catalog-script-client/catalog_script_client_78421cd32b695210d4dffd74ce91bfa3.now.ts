import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['78421cd32b695210d4dffd74ce91bfa3'],
    name: 'On Change Visit Type',
    script: Now.include('./catalog_script_client_78421cd32b695210d4dffd74ce91bfa3-script.js'),
    type: 'onChange',
    variableName: 'dafbbe9f2b259210d4dffd74ce91bf63',
    variableSet: 'afda325f2b259210d4dffd74ce91bf60',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
