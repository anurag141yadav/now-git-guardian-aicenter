import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['6d87d49b2b695210d4dffd74ce91bfa1'],
    name: 'Process Uploaded Visitor Group',
    script: Now.include('./catalog_script_client_6d87d49b2b695210d4dffd74ce91bfa1-script.js'),
    type: 'onChange',
    variableName: '730576cb2ba15210d4dffd74ce91bf12',
    variableSet: 'afda325f2b259210d4dffd74ce91bf60',
    appliesTo: 'set',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
