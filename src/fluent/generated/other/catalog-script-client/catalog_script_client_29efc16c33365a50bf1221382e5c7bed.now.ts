import { CatalogClientScript } from '@servicenow/sdk/core'

CatalogClientScript({
    $id: Now.ID['29efc16c33365a50bf1221382e5c7bed'],
    name: 'On change validate email (single)',
    script: Now.include('./catalog_script_client_29efc16c33365a50bf1221382e5c7bed-script.js'),
    type: 'onChange',
    catalogItem: 'ec2e8c9f2b295210d4dffd74ce91bf86',
    variableName: '6b23324b2ba15210d4dffd74ce91bf0d',
    vaSupported: true,
    $meta: {
        useEsLatest: false,
    },
})
